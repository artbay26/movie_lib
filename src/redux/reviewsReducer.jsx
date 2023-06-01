const REVIEW_ADDED = 'REVIEW_ADDED';
let commentID = 1;

let initialState = {
    reviews: [
        {id: 1, object: 'Me gustaría que lo ponen en español', user: 'Rodney', rating: '5', date: '2023-05-01', text: 'What does he mean, you ask? I heard/saw all sorts of reviews and most were lukewarm that it wasn as bad as expected, or not as good as expected, and the like, so I went in wondering where I would fall and it hit me within the first few minutes...the movie played out exactly as I could see a session of D & D going, and at times, pretty much matched what myself and some friends did when playing.'},
        {id: 2, object: 'Stupid, but tons of Fun!', user: 'Michael', rating: '3', date: '2023-05-09', text:'Okay. Heres the deal: Chris Pine is an actor with way too much onscreen charisma for the dumpster fire of a career he has to show for it (Star Trek, Jack Ryan, Romantic Comedies). Hes the kind of actor who could pull off the cocky hero and seamlessly transition to an emotional wreck or slip into a musical number and you would still feel like it was a believable transformation because the guy has such fun screen presence. Case in point: Dungeons and Dragon: Honor Among Thieves.'},
        {id: 3, object: 'NOT WORTHY Of 4K :O((', user: 'LJLee', rating: '3', date: '2023-05-14', text:'Fantastic story, well composed and obviously great writing and directing. For those of us growing up with D&D as a way of life it is a nice nod while crafting a unique and exciting story. The actors in this (save one) are absolutely amazing. Christ Pine as Edgin does a masterful job. Michelle Rodriguez is (as always) beautiful and fierce and has stunning fight scenes as Holga. Regé-Jean Page and his skillfully deadpan Xenk is superb. Forge is played perfectly by Hugh Grant, he is absolutely perfect for this role and does a great job. The only negative is Chloe Coleman as Kira, her performance is stilted and not developed but does not ruin the movie. Daisy Head is absolutely terrifying as Sofina. Whether you are a fan of D&D or new this is really well done!'},
        {id: 4, object: 'Things wrong with this movie', user: 'Carl', rating: '1', date: '2023-05-15', text:'I was a big D&D fan back in the 1980s and early 1990s when it first came out. I was in a group of older kids led by my older brother, and we spent many a weekend staying up way too late, eating chips and snacks, drinking far too many fizzy cooldrinks (sodas/pops as the Americans call them), and having an absolute blast on a campaign. Ive seen other D&D based movies and shows and I was never really that keen on them. It always felt forced and a little bit cringey. This movie, though, does away with the we must focus on the rules! and instead focuses on the story telling side of D&D - the rules and lore just get incorporated so well in it that it makes it smooth and you dont even notice it. All the places and names of people and cities and areas just brought back SO many happy memories!'},
        {id: 5, object: 'Entertainint, But Not That Serious.', user: 'Sofi', rating: '4', date: '2023-05-21', text:'This movie is great and do not let the title fool you; It may say Dungeons and Dragons but you do not need to know anything about the game to get the movie. It is a heist movie. A fantasy heist movie! What more could you want? Hasbro has made some horrible decisions in trying to steal peoples IP and sending Pinkertons after other people, but dont blame the movie. They had nothing to do with it. The movie is the best movie to come out since the pandemic started.'},
        {id: 6, object: 'everything but the bloody kitchen sink', user: 'Warner', rating: '3', date: '2023-05-26', text:'If you are not put off by dialog that sounds more akin to modern vernacular and dont mind some non-fantasy music added to the soundtrack for attitude, then you will probably enjoy the humor and heart of this fantasy adventure movie. The story, special effects, pacing, and dialog are well done; the movie clocks in at over two hours, so the production did not cheap-out. With stars like Hugh Grant, Chris Pine, and Michelle Rodriguez fully engaged in their roles along with well-acted supporting characters, this movie does not disappoint.'},
        {id: 7, object: 'VAN HELSING', user: 'Rody', rating: '4', date: '2023-05-29', text:'Combine the charm of Firefly, the bright side of life with Monty Python with As-you-wishhhh ending warmth of the Princess Bride told under the banner of Dungeons and Dragons. Got to see the cast at ComicCon 2022, where are my Hall H peeps!? Big thank you to the cast for entertaining us in attendance: Michelle with her combat roll out on stage, Mr Grants whit, Sophia stories of playing D&D in HS, even having to take the bus when she switched schools to get back to her club. Chris with eagerness to watch the trailer along with all of us. To those who played D&D all these decades, you know no movie can entertain like a good campaign, but this comes close'},
    ]
}

const reviewsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case REVIEW_ADDED:            
            state.reviews.unshift(action.review);
            return state;        
        default:
            return state;
    }
}

export const addReviewActionCreator = (object, user, rating, date, text) => {
    return {
        type: REVIEW_ADDED,
        review: {
            id: commentID++, 
            object: object, 
            user: user, 
            rating: rating, 
            date: date, 
            text: text
        }        
    }
}

export default reviewsReducer;