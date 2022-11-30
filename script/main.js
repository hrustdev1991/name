const input = document.querySelector('input');
const glode = document.querySelector('.glode');
const arrResponse = [
  // Положительные ответы
  'Бесспорно', 'Предрешено', 'Никаких сомнений', 'Оперделенно да', 'Можешь быть уверен в этом',
  // Нерешительные ответы
  'Мне кажется да', 'Вероятнее всего', 'Хорошие перспективы', 'Знаки говорят - да', 'Да',
  // Нейстральные
  'Пока не ясно, попробуй снова', 'Спроси позже', 'Лучше не рассказывать', 'Сейчас нельзя предсказать', 'Сконцентрируйся и спроси опять',
  // Отрицательные
  'Даже не думай', 'Мой ответ — «нет»', 'По моим данным — «нет»', 'Перспективы не очень хорошие', 'Весьма сомнительно'];

glode.addEventListener('click', () => {

  if (input.value == '') {

    input.value = 'Задайте ваш вопрос!'

  } else if (input.value == 'Задайте ваш вопрос!') {

    input.value = '';

  } else {

    input.value = '';
    glode.innerHTML = '';

    let div = document.createElement('div');
    let numResponse = Math.floor(Math.random() * arrResponse.length);

    div.classList.add('response');
    div.innerHTML = arrResponse[numResponse];

    glode.appendChild(div);
  }

});
