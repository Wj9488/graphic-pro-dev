gsap.registerPlugin("ScrollTrigger");

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 1024) { 
        window.addEventListener("resize", () => {
            location.reload();
        })
    }
    console.log("gsap")
    gsap.from("#app__header_txt", {
        opacity: 0, 
        duration: 1,
    })
    gsap.from("#app__header_img", {
        opacity: 0, 
        duration: 1,
    })
    gsap.from("#header-divider-1", {
        opacity: 0, 
        duration: 1,
        width: "0%",
        delay: 0.5,
    })
    gsap.from("#header-divider-2", {
        opacity: 0, 
        duration: 1,
        width: "0%",
        delay: 0.5,
    })
    if (window.innerWidth > 1000) {
        gsap.from("#img__grid_1", {
            scrollTrigger: {
                trigger: "#img__grid_1",
                start: "top center",
            },
            opacity: 0, 
            duration: 1,
        })
    } else {
        gsap.from("#img__grid_1", {
            opacity: 0, 
            duration: 1,
            delay: 0.5,
        })
    }

    gsap.from("#img__grid_2", {
        scrollTrigger: {
            trigger: "#img__grid_2",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    })
    gsap.from("#description__grid_1", {
        scrollTrigger: {
            trigger: "#description__grid_1",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 
    gsap.from("#services__section", {
        scrollTrigger: {
            trigger: "#services__section",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 
    gsap.from("#benefits__grid_2", {
        scrollTrigger: {
            trigger: "#benefits__grid_2",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 
    gsap.from("#description__grid_2", {
        scrollTrigger: {
            trigger: "#description__grid_2",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 

    gsap.from("#anim__class", {
        scrollTrigger: {
            trigger: "#anim__class",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 

    gsap.from("#reviews__grid", {
        scrollTrigger: {
            trigger: "#reviews__grid",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 

    gsap.from("#reviews__section", {
        scrollTrigger: {
            trigger: "#description__grid_2",
            start: "top center",
        },
        opacity: 0, 
        duration: 1,
    }) 

    if (window.innerWidth > 764) {
        gsap.to("#land__sec_img_one", {
            scrollTrigger: {
                trigger: "#img-lg-sectionOne",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-100",
            left: "-200",
            display: "block",
        })
    
        gsap.to("#land__sec_img_two", {
            scrollTrigger: {
                trigger: "#img-lg-sectionOne",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "30",
            left: "600",
            display: "block",
        })
    
        gsap.to("#land__sec_img_three", {
            scrollTrigger: {
                trigger: "#img-lg-sectionOne",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-200",
            left: "200",
            display: "block",
        })
    
        gsap.to("#land__sec_img_four", {
            scrollTrigger: {
                trigger: "#img-lg-sectionOne",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "100",
            left: "-900",
            display: "block",
        })
        
        gsap.to("#char__sec_img_one", {
            scrollTrigger: {
                trigger: "#img-lg-sectionTwo",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "200",
            left: "-200",
            display: "block",
        })

        gsap.to("#char__sec_img_two", {
            scrollTrigger: {
                trigger: "#img-lg-sectionTwo",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-200",
            left: "-500",
            display: "block",
        })

        gsap.to("#char__sec_img_three", {
            scrollTrigger: {
                trigger: "#img-lg-sectionTwo",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-150",
            left: "300",
            display: "block",
        })

        gsap.to("#char__sec_img_four", {
            scrollTrigger: {
                trigger: "#img-lg-sectionTwo",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "200",
            left: "100",
            display: "block",
        })

        gsap.to("#anime__sec_img_one", {
            scrollTrigger: {
                trigger: "#img-lg-sectionThree",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "200",
            left: "0",
            display: "block",
        })

        gsap.to("#anime__sec_img_two", {
            scrollTrigger: {
                trigger: "#img-lg-sectionThree",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-200",
            left: "-200",
            display: "block",
        })

        gsap.to("#anime__sec_img_three", {
            scrollTrigger: {
                trigger: "#img-lg-sectionThree",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "-150",
            left: "300",
            display: "block",
        })

        gsap.to("#anime__sec_img_four", {
            scrollTrigger: {
                trigger: "#img-lg-sectionThree",
                start: "center center",
            },
            opacity: 1,
            duration: 1, 
            position: "relative",
            top: "200",
            left: "50",
            display: "block",
        })

        // Adjust the char images for mobile
    
        } else {
            gsap.to("#land__sec_img_one", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionOne",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "-300",
                left: "130",
                display: "block",
            })
    
            gsap.to("#land__sec_img_two", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionOne",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "0",
                marginTop: "140%",
                left: "-135",
                display: "block",
            })

            gsap.to("#char__sec_img_one", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionTwo",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "350",
                left: "50",
                display: "block",
            })
    
            gsap.to("#char__sec_img_two", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionTwo",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "-300",
                left: "-100",
                display: "block",
            })

            gsap.to("#anime__sec_img_one", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionThree",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "300",
                left: "200",
                display: "block",
            })
    
            gsap.to("#anime__sec_img_two", {
                scrollTrigger: {
                    trigger: "#img-lg-sectionThree",
                    start: "center center",
                },
                opacity: 1,
                duration: 1, 
                position: "relative",
                top: "-300",
                left: "-200",
                display: "block",
            })
        }

})