function interpolation(obj) {

   let d = (obj.end - obj.start) / obj.step
   let i = 0

   let t = setInterval(() => {

        if (i >= obj.step) {
            clearInterval(t)
            return
        }

        obj.callback([obj.start + d * i,(obj.duration / obj.step) * (i + 1)])

        i++

   }, obj.duration / obj.step)

}