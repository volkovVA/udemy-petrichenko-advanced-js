import checkNumInputs from './checkNumInputs';

const forms = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal]');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();
  };

  function clearInputs() {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  function hideModal() {
    windows.forEach(item => {
      item.style.opacity = '0';
      item.style.transition = '1s';
      setTimeout(()=>{
        item.style.display = 'none';
      }, 1000);
    });
    document.body.style.overflow = '';
  };

  function clearState() {
    for (const prop of Object.keys(state)) {
      delete state[prop];
    }
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      };

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure )
        .finally(() => {
          clearInputs();
          setTimeout(()=> {
            hideModal();
          }, 2000);
          clearState();
        });
    });
  });
};

export default forms;