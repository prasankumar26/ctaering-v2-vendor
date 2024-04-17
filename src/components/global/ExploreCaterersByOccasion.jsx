import Grid from '@mui/material/Grid';

const caterersbyoccasions = [
    {
        "id": 1,
        "url": "/img/occasions/01.jpg",
        "title": "Wedding"
    },
    {
        "id": 2,
        "url": "/img/occasions/02.jpg",
        "title": "Engagement"
    },
    {
        "id": 3,
        "url": "/img/occasions/03.jpg",
        "title": "Baby Shower"
    },
    {
        "id": 4,
        "url": "/img/occasions/04.jpg",
        "title": "Birthday"
    },
    {
        "id": 5,
        "url": "/img/occasions/05.jpg",
        "title": "Naming Ceremony"
    },
    {
        "id": 6,
        "url": "/img/occasions/06.jpg",
        "title": "Cocktail Party"
    },
    {
        "id": 7,
        "url": "/img/occasions/07.jpg",
        "title": "Bachelorette Party"
    },
    {
        "id": 8,
        "url": "/img/occasions/08.jpg",
        "title": "Farewell Party"
    },
    {
        "id": 9,
        "url": "/img/occasions/09.jpg",
        "title": "Freshers Party"
    },
    {
        "id": 10,
        "url": "/img/occasions/10.jpg",
        "title": "Corporate Party"
    },
    {
        "id": 11,
        "url": "/img/occasions/11.jpg",
        "title": "Religious Functions"
    },
    {
        "id": 12,
        "url": "/img/occasions/12.jpg",
        "title": "Musical Ceremony"
    }
]

const ExploreCaterersByOccasion = ({ occasion }) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={occasion?.id}>
            <div className="explore-cator-box">
                <img src="/img/occasions/01.jpg" alt="" className="img-fluid caterers-occasion-img image-shadow" />
                <h4 className='text-center caterers-occasion-title'>{occasion?.name}</h4>
            </div>
        </Grid>
    )
}

export default ExploreCaterersByOccasion