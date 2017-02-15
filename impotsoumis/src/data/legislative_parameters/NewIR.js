const NewIR = {
    "creditImpotEnfant": 1000/12,
    "bareme": [
        {
            "name": "0%",
            "min": 0,
            "max": 400,
            "tauxMarginal": 0.01
        }, {
            "name": "3%",
            "min": 400,
            "max": 800,
            "tauxMarginal": 0.03
        }, {
            "name": "7%",
            "min": 800,
            "max": 1000,
            "tauxMarginal": 0.07
        }, {
            "name": "14%",
            "min": 1000,
            "max": 1200,
            "tauxMarginal": 0.14
        }, {
            "name": "20%",
            "min": 1200,
            "max": 1600,
            "tauxMarginal": 0.2
        }, {
            "name": "25%",
            "min": 1600,
            "max": 2000,
            "tauxMarginal": 0.25
        }, {
            "name": "30%",
            "min": 2000,
            "max": 2500,
            "tauxMarginal": 0.3
        }, {
            "name": "40%",
            "min": 2500,
            "max": 3000,
            "tauxMarginal": 0.4
        }, {
            "name": "50%",
            "min": 3000,
            "max": 4000,
            "tauxMarginal": 0.5
        }, {
            "name": "55%",
            "min": 4000,
            "max": 5000,
            "tauxMarginal": 0.55
        }, {
            "name": "60%",
            "min": 5000,
            "max": 10000,
            "tauxMarginal": 0.6
        }, {
            "name": "70%",
            "min": 10000,
            "max": 15000,
            "tauxMarginal": 0.7
        }, {
            "name": "80%",
            "min": 15000,
            "max": 33000,
            "tauxMarginal": 0.8
        }, {
            "name": "90%",
            "min": 33000,
            "max": Number.MAX_SAFE_INTEGER,
            "tauxMarginal": 0.9
        }
    ]

}

export default NewIR;