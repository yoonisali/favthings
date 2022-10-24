window.addEventListener( "load", function () {
  let h1 = document.querySelector('h1');
  h1.remove();

  let h2 = document.createElement('h2');
  h2.append('Webpage Recreation Practice');

  let p = document.createElement('p');
  p.append('The HTML of this webpage was created with JavaScript.');

  let img = new Image(600,400);
  img.src = ('img/1200.jpeg');

  h1 = document.createElement('h1');
  h1.append('Facts about the Multicolored Tanager');
  
  let ul = document.createElement('ul');
  ul.append('');

  let li = document.createElement('li');
  li.append('It is endemic to the mountains of Colombia.');
  let li2 = document.createElement('li');
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

  let h22 = document.createElement('h2');
  h22.append('Source');

  let a = document.createElement('a');
  let link = document.createTextNode("This is link");
  a.title = 'This is a Link.';
  a.href = 'https://en.wikipedia.org/wiki/Multicoloured_tanager';



  

  const body = document.querySelector('body');
  document.body.append(h2);
  document.body.append(p);
  document.body.append(img);
  document.body.append(h1);
  document.body.append(ul);
  document.body.append(li);
  document.body.append(li2);
  document.body.append(h22);
  document.body.append(link);
  document.body.append(a);
});


