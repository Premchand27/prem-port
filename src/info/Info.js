let self ="https://jntukucev.hosting2.acm.org/wp-content/uploads/2023/07/premweb-187x300.jpg"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];



export let singlePage = false;



export const info = {
    firstName: "Premchand",
    lastName: "",
    position: "Frontend Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        
        {
            emoji: "💼",
            text: "Studying Information Technology at JNTUGV"
        },
        {
            emoji: "📧",
            text: "premchandgunturu710@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Premchand27",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/gunturu-premchand-5b74b8239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
       
      
        {
            image: 'https://i.ibb.co/Y7DLFmv/Screenshot-2024-03-01-204624.png',
            live: "https://ityukta2k24.jntugv.in/",
            source: "https://github.com/jayasaisrikar/ityukta2k24",
            title: 'ITYUKTA 2K24',
            smallText: 'Ityukta A Two Day National Level Technical Symposium Website'
        },
        {
            image: 'https://i.ibb.co/LCF79Kt/Screenshot-2024-06-20-121428-Copy-3.png',
            live: "https://jntukucev.hosting2.acm.org/",
            source: "https://jntukucev.hosting2.acm.org/",
            title: 'JNTU-GV CEV(A) ACM Student Chapter Website ',
            smallText: 'Designed using Wordpress Elementor'
        }
        ,
        {
            image: 'https://i.ibb.co/yfmLQVs/Screenshot-2024-06-20-121533.png',
            live: "https://getlifeinspired.vercel.app/",
            source: "https://github.com/Premchand27/getinspired",
            title: 'Inspiring quotes Generator Website ',
            smallText: 'Designed using React js '
        },
        {
            image: 'https://i.ibb.co/0ZGKRHQ/Screenshot-2024-06-20-121805.png',
            live: "https://github.com/Premchand27/bytes",
            source: "https://github.com/Premchand27/getinspired",
            title: 'Bytes Magazine Website',
            smallText: 'Designed using React js '
        },
        {
            image: 'https://i.ibb.co/hcNngLk/Screenshot-2024-06-20-121650.png',
            live: "https://getwheather.vercel.app/",
            source: "https://github.com/Premchand27/wheatherapp",
            title: 'Weather Forecasting Website',
            smallText: 'Designed using React js '
        },
        {
            image: 'https://i.ibb.co/2dxnGDW/Screenshot-2024-06-20-121726.png',
            live: "https://clickoshot.vercel.app/",
            source: "https://github.com/Premchand27/clickoshot",
            title: 'Clikoshot Photography Website',
            smallText: 'Designed using React js '
        }

    ]
}