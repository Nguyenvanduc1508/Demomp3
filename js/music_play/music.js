// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

/**
 * Render song -> ok
 * Scroll song -> ok
 * Play/ Pause / Seek -> ok
 * CD rotale -> ok
 * Next / Prey -> ok
 * Random -> ok
 * Next / repeat when ended -> ok
 * Active song
 * Scroll active song into view
 * Play song when click
 */






    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const cd = $('.cd');
    const heading = $('header h2');
    const cdThumb = $('.cd-thumb');
    const audio = $('#audio');
    const player = $('.player')
    const playBtn = $('.btn-toggle-play');
    const progress = $('#progress');
    const nextBtn = $('.btn-next');
    const prevBtn = $('.btn-prev');
    const btnRandom = $('.btn-random');
    const btnRepeat = $('.btn-repeat');
    const playList = $('.playlist');

    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        songs: [
            {
            name: "Cưới Thôi",
            singer: "Masiu",
            path: "./mp3/cc.mp3",
            image: "./img/cuoithoi.jpg"
            },
            {
            name: "Hồng Trần",
            singer: "Huy Vạc",
            path: "./mp3/ht.mp3",
            image:
                "./img/hongtran.jpg"
            },
            {
            name: "Thủ Đô",
            singer: "Beck'Stage",
            path: "./mp3/td.mp3",
            image: "./img/thudo.jpg"
            },
            {
            name: "Câu Hứa Chưa Vẹn Tròn",
            singer: "Phát Huy",
            path: "./mp3/chctv.mp3",
            image:
                "./img/cauhua.jpg"
            },
            {
            name: "Gõ Cửa Trái Tim",
            singer: "Raftaar",
            path: "./mp3/gocuatraitim.mp3",
            image:
                "./img/gocuatraitim.jpg"
            },
            {
            name: "Phận Duyên Lỡ Làng",
            singer: "Raftaar x kr$na",
            path:
                "./mp3/phanduyenlolang.mp3",
            image:
                "./img/duyenphanlolang.jpg"
            },
             {
            name: "Đừng Sợ Đau",
            singer: "Raftaar x kr$na",
            path:
                "./mp3/dungsodau.mp3",
            image:
                "./img/dungsodau.jpg"
            },
             {
            name: "Đoạn Tuyệt Nàng Đi",
            singer: "Raftaar x kr$na",
            path:
                "./mp3/doantuyet.mp3",
            image:
                "./img/doantuyetnangdi.jpg"
            },
        ],
        rander: function(){
            const htmls = this.songs.map((song, index) => {
                return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
            })
            playList.innerHTML = htmls.join('')
        },

        defineProperties: function(){
            Object.defineProperty(this, 'currentSong', {
                get: function() {
                    return this.songs[this.currentIndex]
                }
            })
        },

        handleEvent: function() {
            const _this = this;
            const cdWidth = cd.offsetWidth;

            // Xử lý CD quay / dừng
            const cdThumbAnimate = cdThumb.animate([
                {
                    transform: 'rotate(360deg)'
                }
            ], {
                duration: 10000,
                interations: Infinity
            }) 
            cdThumbAnimate.pause()

            //  Xử lý phóng to / thu nhỏ CD
            document.onscroll = function(){
                const scrollTop = window.screenY || document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scrollTop
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
                cd.style.opacity = newCdWidth / cdWidth
            }

            //  Xử lý khi click Play
            playBtn.onclick = function(){
                if(_this.isPlaying){
                    audio.pause();
                }else{
                    audio.play();
                }
                
            }
            // khi songs play
            audio.onplay = function(){
                _this.isPlaying = true
                player.classList.add('playing')
                cdThumbAnimate.play()
            }
            // khi songs pause
            audio.onpause = function(){
                _this.isPlaying = false
                player.classList.remove('playing')
                cdThumbAnimate.pause();
            }
            //  khi tiến độ bài hát thay đổi
            audio.ontimeupdate = function() {
                if(audio.duration){
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                    progress.value = progressPercent
                }
            }
            // khi tua song
            progress.onchange = function(e){
                const seekTime = audio.duration / 100 * e.target.value
                audio.currentTime = seekTime
            },
            // khi next songs
            nextBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                }else{
                    _this.nextSong();
                }
                audio.play();
                _this.rander();
                _this.scrollToActiveSong();
            },
            // khi lùi songs
            prevBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                }else{
                    _this.prevSong();
                }
                audio.play();
                _this.scrollToActiveSong();
            },
            // khi bật / tắt random
            btnRandom.onclick = function() {
                _this.isRandom = !_this.isRandom;
                btnRandom.classList.toggle('active', _this.isRandom);
            }
            // lặp lại bài hát
            btnRepeat.onclick = function() {
                _this.isRepeat = !_this.isRepeat
                btnRepeat.classList.toggle('active', _this.isRepeat)
            }
            audio.onended = function() {
                if(_this.isRepeat){
                    audio.play()
                }else{
                    nextBtn.click();
                }
            },
            //  khi click vào bài hát
            playList.onclick = function(e) {
                const songNode = e.target.closest('.song:not(.active)');
                if(songNode || e.target.closest('.option')){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurentSong();
                    _this.rander();
                    audio.play();
                }
            }
        },
        scrollToActiveSong: function() {
            setTimeout (() => {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            }, 300);
        },
        loadCurentSong: function(){
            heading.textContent = this.currentSong.name;
            cdThumb.style.background = `url('${this.currentSong.image}')`;
            audio.src = this.currentSong.path;
        },
        // khi chuyển bài
        nextSong: function(){
            this.currentIndex++
            if(this.currentIndex >= this.songs.length){
                this.currentIndex = 0
            }
            this.loadCurentSong();
        },
        // khi lùi bài hát
        prevSong: function() {
            this.currentIndex--
            if(this.currentIndex < 0){
                this.currentIndex = this.songs.length -1
            }
            this.loadCurentSong()
        },
        playRandomSong: function() {
            let newIndex;
            do{
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while(newIndex == this.currentIndex)
            this.currentIndex = newIndex
            this.loadCurentSong()
        },
        start: function(){
            // Định nghĩa các thuộc tính cho Object
            this.defineProperties()

            //  Lắng nghe / xử lý các sự kiện 
            this.handleEvent()

            // hiển thị bài hát
            this.rander()
            // Tải thông tin bài hát đầu tiên vào UI
            this.loadCurentSong()
        }
    }
    app.start()