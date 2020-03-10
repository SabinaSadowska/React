import React from 'react';
import Header from './header.component';
import Text from './text__section.component';
import Footer from './footer.component';
import AlertInfo from './alertInfo.component';
import Console from './console.component';
import Counter from './counter.component'

const text = "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,it over 2000 years old. Richard McClintock, a Latin professor "
const text2 = `Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a`;
const text3 = `Contrary to popular belief, Lorem Ipsum is not simply random text.
It has roots in a piece of classical Latin literature from 45 BC,
it over 2000 years old. Richard McClintock, a Latin professor 
at Hampden-Sydney College in Virginia, looked up one of the more 
obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
going through the cites of the word in classical literature, discovered
the undoubtable source. Lorem Ipsum comes from sections 1.10.32
and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
and Evil) by Cicero, written in 45 BC. This book is a treatise on the
heory of ethics, very popular during the Renaissance. The first line
of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s
is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
original form, accompanied by English versions from the 1914 translation by H. Rackham.`


function App() {
  return (
    <div className="App">
     <Header text2 = {text2} />
     <Text text3 = {text3} />
     <Footer text = {text} />
     <AlertInfo />
     <Console />
     <Counter />

    </div>
  );
}

export default App;
