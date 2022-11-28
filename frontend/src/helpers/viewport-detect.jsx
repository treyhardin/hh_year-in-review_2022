const viewportDetect = (element, func) => {

    let isInViewport = false

    const observer = new IntersectionObserver(entries => {

        if (entries[0].intersectionRect.height >= window.innerHeight * 0.9) {
            // console.log('true')
            isInViewport = true
            // func(element, true)
        }

        // func(element, false)

        // console.log('false')
        isInViewport = false

    }, {
        // threshold: 0.5
    })
    
    observer.observe(element)

    return isInViewport
}

export default viewportDetect