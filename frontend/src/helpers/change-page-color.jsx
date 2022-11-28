const changePageColor = (element, color) => {

    // let defaultPageColor = document.documentElement.style.getPropertyValue('--page-color-default')
    // let newPageColor = document.documentElement.style.getPropertyValue('--color-red')

    const observer = new IntersectionObserver(entries => {

        // let currentPageColor = document.documentElement.style.getPropertyValue('--page-color')

        if (entries[0].isIntersecting) {
            document.documentElement.style.setProperty('--page-color', color)
        } 

    }, {
        // threshold: 0.5
        rootMargin: '-200px'
    })
    
    observer.observe(element)
}

export default changePageColor