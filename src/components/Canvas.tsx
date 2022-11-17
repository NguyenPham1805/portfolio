import React, { useEffect, useRef } from 'react'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const UNIT_COUNT = 100

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    let hue = 182

    const getRandomInt = (min: number, max: number): number =>
      Math.round(Math.random() * max - min) + min

    class Unit {
      private x: number = Math.round(innerWidth / 2)
      private y: number = Math.round(innerHeight / 2)
      private sx: number = this.x
      private sy: number = this.y
      private angle: number = 60 * getRandomInt(0, 5)
      private r: number = (Math.PI / 180) * (this.angle + 90)
      private time: number = 0
      private ttl: number = getRandomInt(180, 300)
      private size: number = 1
      private speed: number = 2
      private maxDistance: number = 150
      private hue: number = 0

      constructor() {
        this.reset()
      }

      draw() {
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`
        ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`
        ctx.shadowBlur = 5
        ctx.fill()
        ctx.closePath()
        ctx.restore()
      }

      update() {
        let dx = this.sx - this.x
        let dy = this.sy - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)

        if (distance >= this.maxDistance) {
          if (getRandomInt(0, 1)) this.angle += 60
          else this.angle -= 60

          this.r = (Math.PI / 180) * (this.angle + 90)
          this.sx = this.x
          this.sy = this.y
        }

        this.x += this.speed * Math.sin(this.r)
        this.y += this.speed * Math.cos(this.r)

        if (
          this.time > this.ttl ||
          this.x < 0 ||
          this.x > innerWidth ||
          this.y < 0 ||
          this.y > innerHeight
        ) {
          this.reset()
        }

        this.time++
      }

      reset() {
        this.x = Math.round(innerWidth / 2)
        this.y = Math.round(innerHeight / 2)
        this.sx = this.x
        this.sy = this.y
        this.size = 1
        this.angle = 60 * getRandomInt(0, 5)
        this.r = (Math.PI / 180) * (this.angle + 90)
        this.speed = 2
        this.maxDistance = 30
        this.time = 0
        this.hue = hue
        hue += 1
        this.ttl = getRandomInt(180, 300)
      }
    }

    const units: Unit[] = []

    const resizeResset = () => {
      canvas.width = innerWidth
      canvas.height = innerHeight

      ctx.fillStyle = '#0000000d'
      ctx.fillRect(0, 0, innerWidth, innerHeight)
    }

    const animationLoop = () => {
      ctx.fillStyle = '#0000000d'
      ctx.fillRect(0, 0, innerWidth, innerHeight)

      for (let i = 0; i < units.length; i++) {
        units[i].draw()
        units[i].update()
      }
      requestAnimationFrame(animationLoop)
    }

    const init = () => {
      for (let i = 0; i < UNIT_COUNT; i++) {
        setTimeout(() => {
          units.push(new Unit())
        }, i * 200)
      }

      resizeResset()
      animationLoop()
    }

    setTimeout(init, 2000)

    window.addEventListener('resize', resizeResset)
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 w-full h-full"></canvas>
}

export default Canvas
