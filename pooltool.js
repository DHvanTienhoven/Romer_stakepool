var mypoolid = "52b33a5db6d27d3b791c65d21a646f2b127aa0c0a09737f692c53750a5dab0ce"
    let LoadData = function() {
        const start = Date.now()
	var currentepoch = 0
        $.getJSON( "https://pooltool.s3-us-west-2.amazonaws.com/stats/stats.json?now="+String(start), function( data ) {
            var formattedheight = numeral(data['majoritymax']).format('0,');
            $("#ptepoch").html(data['currentepoch'])
            currentepoch = data['currentepoch']
            $("#ptslot").html(data['currentslot'])
            $("#ptheight").html(formattedheight)

            $.getJSON( "https://pooltool.s3-us-west-2.amazonaws.com/8e4d2a3/pools/"+mypoolid+"/livestats.json?now="+String(start), function( data ) {
                var formattedstake = numeral(data['livestake']/1000000).format('0.00 a');

                $("#ptstake").html(formattedstake)
                if (
                  typeof(data['lastBlockEpoch'])=="undefined" ||
                  parseInt(currentepoch) != parseInt(data['lastBlockEpoch']) &&
                  ! parseInt(currentepoch) == (parseInt(data['lastBlockEpoch']) + 1)
                ) {
                    data['epochblocks']="?"
                    data['lifetimeblocks']="?"
                } else if (parseInt(currentepoch) == (parseInt(data['lastBlockEpoch']) + 1)) {
                    data['epochblocks']="0"
                }
                $("#pteblocks").html(data['epochblocks'])
                $("#ptlblocks").html(data['lifetimeblocks'])
            })
        })
    }

    $(document).ready(function() {
        LoadData()
        setInterval(LoadData, 60000); // this will update every 30 seconds
    })