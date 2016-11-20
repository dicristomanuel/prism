export const OnInit = (data) => {
  console.log('OnInit >> ', data);
  return {...data, state: 'bot'};
}
