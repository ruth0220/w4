const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温華氏40度で外は寒かった。  :insertx: は散歩に出かけた。 :inserty: に着いた。 :insertz:  体重110ポンドの:insertx: は驚いたが、にゃんこ先生は驚かなかった。:inserty:ではよくあることだった。';
const insertX = ['キュウベエ', 'ミッフィー', 'しまじろう'];
const insertY = ['横浜', '府中', '鷹の台'];
const insertZ = ['雨が降っていた。', '霧が出ていた。', 'お天気雨だった。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(110*0.0714286)} kg`;
    const temperature =  `${Math.round((40-32) * 5 / 9)} 摂氏`;
    newStory = newStory.replace('気温華氏40度', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
