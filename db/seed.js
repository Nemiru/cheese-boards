const { Board, User, Cheese} = require('../models')
const db = require('./db')

async function seed () {
    await db.sync({
        force: true
    })

    await Cheese.create([
        { 
            title: "Parmesan",
            description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."
        },
        {   
             title: "Cheddar",
            description: "The texture is slightly buttery, moist, and a little melty. It's truly a versatile crowd-pleaser. Aged cheddars become more nutty, crumbly, and sharp. During the aging process the cheese develops a slightly tangier finish, some earthy notes, and some hard salt-like crystals that add a slight crunch to each bite."
        },
        {
            title: "Gouda",
            description: "Typically made from cow's milk, this semi-hard cheese is characterised by its aromatic and caramel-like flavour combined with its dense and springy texture. Hints of nuts with sweet and creamy notes embrace your palate in a graceful sensation and, depending on the age, the finish ranges from smooth to sharp."
        },
        {   
            title: "Swiss",
            description: "Swiss cheese is sweet, mild, and nutty—everything an alpine-style cheese should be! When you first pick up a beautiful slice of swiss, you'll notice its slightly yellow color and nutty aroma. Upon tasting it, you may appreciate how sweet and smooth swiss is."
        },
        {
            title: "Brie",
            description: "The Queen of Cheeses. Acclaimed as one of the world's great cheeses - in fact, often called the “Queen of Cheeses” - velvety French Brie is characterized by a downy-white edible rind and a cream-colored, buttery-soft interior that oozes at the peak of ripeness."
        },
        {
            title: "Gorgonzola",
            description: "Gorgonzola is a straw-white, soft cheese with greenish streaks deriving from a process called “erborinatura” in Italian, that is the creation of moulds. This cheese is creamy and soft, with a peculiar, typical taste."
        },
        {
            title: "Mozzarella",
            description: "Mozzarella is a plastic or stretched-curd cheese; the curd is mixed with heated whey and stretched and kneaded until it attains a smooth, pliable consistency. It is then molded into spheres or ovals and stored in water to keep it moist."
        },
        {   
            title: "Boursin",
            description: "Boursin is fresh cream and soft cheese, flavoured with herbs and spices. Although it is just an herb-flavoured French cream cheese that can be easily imitated, only Boursin with its buttery flavour and slightly crumbly texture can be labelled as an All natural Gournay cheese"
        },
        {
            title: "Fontina",
            description: "Incredibly rich and creamy, the flavours of this cheese are sweet and pungent, unveiling tones of butter and roasted nuts as it lingers on your palate. Traditionally made from unpasteurised milk, the texture is semi hard, smooth and adorned with small eyes in the body."
        },
        {
            title: "Wensleydale",
            description: "Wensleydale is a style of cheese originally produced in Wensleydale, North Yorkshire, England, but now mostly made in large commercial creameries throughout the United Kingdom. The term Yorkshire Wensleydale can only be used for cheese that is made in Wensleydale"
        }
        ])
    
    await Board.create([
        {type:"wood",
        description: "very sturdy and a classic choice to make",
        rating: 8 },
        { type: "metal",
        description: "a weird choice to make but a shiny one",
        rating: 5},
        {type: "plate",
        description: "a simple alternative to the classic choice",
        rating: 4},
        {type: "cardboard",
        description: "not the best choice for a cheese board",
        rating: 1
        }
    ])

    await User.create([
        {
            name: "Evenlyn Francis",
            email: "evefrancis@gmail.com" 
        },
        {
            name: "Thomas Martino",
            email: "mariothoom34@outlook.com"  
        },
        {
            name: "Pochinka Notaku",
            email: "pochinochi@protonmail.com"
        },
        {
            name: "Eloine Lope",
            email: "elopenote90@yahoo.com"
        },
        {
            name: "Maiko Torama",
            email: "naironoko22@gmail.com"

        }

    ])
     

}

seed()

module.exports = seed