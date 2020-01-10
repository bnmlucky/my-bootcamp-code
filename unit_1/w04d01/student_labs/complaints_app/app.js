$(() => {
  const brooklynTrouble = []; //an array of objects that are instances of trouble
  const manhattanTrouble = [];
  const queensTrouble = [];
  const statenIslandTrouble = [];
  const bronxTrouble = [];

  const getBrooklyn = () => {
    const handleData = data => {
      for (let i = 0; i < 10; i++) {
        const descriptor = data[i].descriptor;
        const resolution = data[i].resolution_description;
        const obj = {
          descriptor: data[i].descriptor,
          resolution: data[i].resolution_description
        };
        brooklynTrouble.push(obj);
      }
      console.log(brooklynTrouble);
    };
    const brooklyn =
      "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BROOKLYN";
    $.ajax({ url: brooklyn }).then(handleData);
  };
  getBrooklyn();

  const getManhattan = () => {
    const handleData = data => {
      for (let i = 0; i < 10; i++) {
        const descriptor = data[i].descriptor;
        const resolution = data[i].resolution_description;
        const obj = {
          descriptor: data[i].descriptor,
          resolution: data[i].resolution_description
        };
        manhattanTrouble.push(obj);
      }
      console.log(manhattanTrouble);
    };
    const manhattan =
      "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=MANHATTAN";
    $.ajax({ url: manhattan }).then(handleData);
  };
  getManhattan();

  const getQueens = () => {
    const handleData = data => {
      for (let i = 0; i < 10; i++) {
        const descriptor = data[i].descriptor;
        const resolution = data[i].resolution_description;
        const obj = {
          descriptor: data[i].descriptor,
          resolution: data[i].resolution_description
        };
        queensTrouble.push(obj);
      }
      console.log(queensTrouble);
    };
    const queens =
      "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=QUEENS";
    $.ajax({ url: queens }).then(handleData);
  };
  getQueens();

  const getStatenIsland = () => {
    const handleData = data => {
      for (let i = 0; i < 10; i++) {
        const descriptor = data[i].descriptor;
        const resolution = data[i].resolution_description;
        const obj = {
          descriptor: data[i].descriptor,
          resolution: data[i].resolution_description
        };
        statenIslandTrouble.push(obj);
      }
      console.log(statenIslandTrouble);
    };
    const statenIsland =
      "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=STATEN ISLAND";
    $.ajax({ url: statenIsland }).then(handleData);
  };
  getStatenIsland();

  const getBronx = () => {
    const handleData = data => {
      for (let i = 0; i < 10; i++) {
        const descriptor = data[i].descriptor;
        const resolution = data[i].resolution_description;
        const obj = {
          descriptor: data[i].descriptor,
          resolution: data[i].resolution_description
        };
        bronxTrouble.push(obj);
      }
      console.log(bronxTrouble);
    };
    const bronx =
      "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=BRONX";
    $.ajax({ url: bronx }).then(handleData);
  };

  getBronx();

  $(".brooklyn").one("click", event => {
    event.preventDefault();
    for (i = 0; i < brooklynTrouble.length; i++) {
      const crime = $("<li>")
        .text(brooklynTrouble[i].descriptor)
        .attr("id", "crime");
      $(".crimeslist").append(crime);
      //   const policeReaction = $("<button>")
      //     .text("WHAT DID THE POLICE DO?")
      //     .attr("id", "reaction");
      //   $(".crimeslist").append(policeReaction); --- this is not the right way to get it to show up
    }
  });

  $(".manhattan").one("click", event => {
    event.preventDefault();
    for (i = 0; i < manhattanTrouble.length; i++) {
      const crime = $("<li>")
        .text(manhattanTrouble[i].descriptor)
        .attr("id", "crime");
      $(".crimeslist").append(crime);
    }
  });

  $(".queens").one("click", event => {
    event.preventDefault();
    for (i = 0; i < queensTrouble.length; i++) {
      const crime = $("<li>")
        .text(queensTrouble[i].descriptor)
        .attr("id", "crime");
      $(".crimeslist").append(crime);
    }
  });

  $(".bronx").one("click", event => {
    event.preventDefault();
    for (i = 0; i < bronxTrouble.length; i++) {
      const crime = $("<li>")
        .text(bronxTrouble[i].descriptor)
        .attr("id", "crime");
      $(".crimeslist").append(crime);
    }
  });

  $(".staten-island").one("click", event => {
    event.preventDefault();
    for (i = 0; i < statenIslandTrouble.length; i++) {
      const crime = $("<li>")
        .text(statenIslandTrouble[i].descriptor)
        .attr("id", "crime");
      $(".crimeslist").append(crime);
    }
  });

  /* A more grown-up way to do this is (I just don't know how): 
  create a function that shows data according to the borough value, pass borough into it
  create a function that takes the data from the service and transforms it
  create a function that takes the transformed data and shows them up on the screen
  */
});
