(function(){
    const COMPLETE_DATA = [];
    const SUMMARY_DATA = '';


    var getMydata = () => {
        fetch('https://corona.lmao.ninja/countries')
        .then(res=>{
            res.json();
        }).then( response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        })
    }

    getMydata();
})();