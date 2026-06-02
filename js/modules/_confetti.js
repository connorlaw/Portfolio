class Confetti {
  constructor() {
    this.colours = ['#9d61f5', '#e039be', '#f13d46', '#a17d29', '#5f8f24', '#26963d', '#25918b', '#4c7cf4'];
    this.particles = [];
    this.animId    = null;
    this.canvas    = null;
    this.ctx       = null;
  }

  init() {}

  burst() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.canvas) {
      this.canvas.remove();
    }

    this.canvas = document.createElement('canvas');
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    Object.assign(this.canvas.style, {
      position:      'fixed',
      top:           '0',
      left:          '0',
      width:         '100%',
      height:        '100%',
      pointerEvents: 'none',
      zIndex:        '9999',
    });
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.particles = [];
    const w = this.canvas.width;
    const h = this.canvas.height;
    const count = 180;

    for (let i = 0; i < count; i++) {
      this.particles.push(this._createParticle(0, h,  1));
      this.particles.push(this._createParticle(w, h, -1));
    }

    this._animate();
  }

  _createParticle(x, y, dir) {
    const spread = _random(-25, 25) * (Math.PI / 180);
    const angle  = Math.PI / 4 + spread; // 45° base
    const speed  = _random(10, 50);

    return {
      x, y,
      velocityX: Math.cos(angle) * speed * dir,
      velocityY: -Math.sin(angle) * speed,

      width:  _random(6, 12),
      height: _random(8, 20),
      color:  this.colours[Math.floor(Math.random() * this.colours.length)],

      rotationZ:      _random(0, 360),
      rotationSpeedZ: _random(-6, 6),
      rotationX:      _random(0, 360),
      rotationSpeedX: _random(15, 40),
      rotationY:      _random(0, 360),
      rotationSpeedY: _random(-10, 10),

      gravity:         0.5,
      drag:            0.96,
      flutterWidth:    _random(0.5, 2.5),
      flutterFrequency: _random(0.05, 0.15),
      flutterOffset:   _random(0, 2 * Math.PI),
      wind:            _random(-0.5, 0.5),
      lift:            _random(0.2, 0.5),

      opacity: 1,
      life:    220,
      time:    0,
    };
  }

  _update(p) {
    p.time++;

    p.velocityX *= p.drag;
    p.velocityY *= p.drag;

    const flutterInfluence = Math.min(p.time / 60, 1);
    const flutter = Math.sin(p.time * p.flutterFrequency + p.flutterOffset) * p.flutterWidth;
    p.velocityX += flutter * 0.1 * flutterInfluence + p.wind * 0.01;

    const flipX = Math.cos(p.rotationX * Math.PI / 180);
    p.velocityY += (p.gravity - p.lift * Math.abs(flipX)) * flutterInfluence;

    p.x += p.velocityX;
    p.y += p.velocityY;

    p.rotationZ += p.rotationSpeedZ;
    p.rotationX += p.rotationSpeedX;
    p.rotationY += p.rotationSpeedY;

    p.rotationSpeedX *= 0.98;
    p.rotationSpeedY *= 0.98;
    p.rotationSpeedZ *= 0.98;

    if (p.y >= this.canvas.height) p.opacity -= 0.02;
    if (p.life < 30) p.opacity -= 0.03;
    p.life--;
  }

  _draw(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = Math.max(p.opacity, 0);
    ctx.fillStyle   = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotationZ * Math.PI / 180);

    const flipX = Math.cos(p.rotationX * Math.PI / 180);
    const flipY = Math.cos(p.rotationY * Math.PI / 180);
    ctx.scale(flipY, flipX);
    ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);

    ctx.restore();
  }

  _animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const remaining = [];
    for (const p of this.particles) {
      this._update(p);
      this._draw(p);
      if (p.life > 0 && p.opacity > 0) remaining.push(p);
    }
    this.particles = remaining;

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this._animate());
    } else {
      this.canvas.remove();
      this.canvas  = null;
      this.ctx     = null;
      this.animId  = null;
    }
  }
}

function _random(min, max) {
  return Math.random() * (max - min) + min;
}

export default Confetti;
