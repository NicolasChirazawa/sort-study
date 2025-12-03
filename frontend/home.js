let xasis = { categories: [] };
let series = [];

function loading() {
  const button = document.getElementsByClassName('button');
  
  const button_list = button[0];
  const button_ordenate = button[1];

  button_list.addEventListener('click', generateList);
  button_ordenate.addEventListener('click', sortList);
}

async function generateList () {
  const inputs = document.getElementsByClassName('subprincipal')[0];

  const input_list = inputs.getElementsByClassName('elements')[0].value;
  const input_number = inputs.getElementsByClassName('elements')[1].value;

  const url = `http://localhost:3000/v1/generateRandomNumbers/${input_list}/${input_number}`;

  let result;
  try {
    result = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(async(response) => await response.json());

    let lists = [];
    for (let i = 0; i < result.lists.length; i++) {
      lists.push(`${result.lists[i]}/`);
    };

    lists[lists.length - 1] = lists[lists.length - 1].slice(0, lists[lists.length - 1].length - 1);
    
    const textarea = document.getElementById('lista');
    textarea.value = lists;

  } catch (e) {
    console.log(e);
  }
}

async function sortList () {
  const algorithm_name = document.getElementById('algorithm').value;
  let response = document.getElementById('lista').value;

  response = response.split('/');

  for(let i = 0; i < response.length; i++) {
    response[i] = response[i].split(',');
    if (i > 0) { response[i].shift() };

    response[i] = response[i].map(n => Number(n));
  }

  const url = `http://localhost:3000/v1/sortLists/${algorithm_name}`;
  let result;

  try {
    result = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({array_lists: response})
    }).then(async(result) => await result.json());
  } catch (e) {
    console.log(e);
  }

  updateGraphicValues (result);
  generateGraphic();
}

function adjustValues (sortTime) {
  let decimalPosition = Infinity;
  for (let i = 0; i < String(sortTime).length; i++) {
    if (String(sortTime)[i] === '.') {
      decimalPosition = i + 4;
    }
  }
  let adjustedSortTime = String(sortTime).slice(0, decimalPosition); 
  return adjustedSortTime;
};

function getListLength (list) {
  const list_length = list.split('/')[0].split(',').length;
  return list_length;
}

function updateXassis (list_length) {
  let array_position;
  let new_value;

  for (let i = 0; i < xasis.categories.length; i++) {
    if (list_length === xasis.categories[i]) { 
      array_position = i;
      new_value = false;
      return [array_position, new_value];
    }
  }

  xasis.categories.push(list_length);
  xasis.categories.sort((a, b) => a - b);

  for (let i = 0; i < xasis.categories.length; i++) {
    if (list_length === xasis.categories[i]) {
      array_position = i;
      new_value = true;
      return [array_position, new_value];
    }
  }
}

function updateSeries (array_position, new_value, algorithm, sortMedia) {
  let algorithm_element;
  let isAlgorithmOnList = false;

  for (let i = 0; i < series.length; i++) {
    if (series[i]?.name === algorithm) {
      algorithm_element = i;
      isAlgorithmOnList = true;
      break;
    }
  }

  if (isAlgorithmOnList) {
    if (!new_value) {
      series[algorithm_element].data.splice(array_position, 1, sortMedia);
      return;
    }

    series[algorithm_element].data.splice(array_position, 0, sortMedia);
  } else if (!isAlgorithmOnList) {
    let plus_value = new_value && series[0]?.data !== undefined ? 1 : 0;
    let data_length = series[0]?.data?.length || 1;
    let data = [];

    for (let i = 0; i < data_length + plus_value; i++) {
      if (i !== array_position) {
        data.push(null);
      } else {
        data.push(sortMedia);
      };
    };

    series.push({
      name: algorithm,
      data: data,
    })

    if (!new_value) { return }
  }

  for (let i = 0; i < series.length; i++) {
    if (series[i].name !== algorithm) {
      series[i].data.splice(array_position, 0, null);
    }
  }
}

function updateGraphicValues(sortResult) {
  let list = document.getElementById('lista').value;
  let list_length = getListLength(list);

  const [array_position, new_value] = updateXassis(list_length);

  let [ algorithm, sortMedia ] = [ 
    sortResult.algorithm,
    sortResult.sortMedia
  ];

  sortMedia = sortMedia.split(',')[0].slice(0, sortMedia.length - 2);
  sortMedia = adjustValues(sortMedia);

  updateSeries(array_position, new_value, algorithm, sortMedia);
  return;
}

function generateGraphic() {
  var options = {
    series: series,
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Algoritmos de ordenação',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: xasis,
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}