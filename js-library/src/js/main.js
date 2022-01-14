import $ from './lib/lib';

$('#first').on('click', () => {
  $('.text').eq(0).fadeToggle(800);
})

$('[data-count="second"]').on('click', () => {
  $('.text').eq(0).fadeToggle(800);
})

$('button').eq(0).on('click', () => {
  $('.text').fadeToggle(800);
})

$('.wrap').html(
  `
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
      <a href="#" class="dropdown-item">Action</a>
      <a href="#" class="dropdown-item">Action #2</a>
      <a href="#" class="dropdown-item">Action #3</a>
    </div>
  </div>
  `
)

$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another button',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('Hello world')
        }
      ]
    ]
  }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res));