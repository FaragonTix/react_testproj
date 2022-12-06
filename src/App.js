import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


//глобальные переменные
ples=true
const appRoot = document.getElementById('root');
//контент
class PageOne extends React.Component { 

  render(){ 
      document.title = "Главная";
  return (<div>Текст Текст Текст Текст Текст </div>);
  }
}
function PageTwo(props) {
   document.title = "кнопка вторая";
  return (<div>Кнопка 2</div>);
}
function PageThree(props) {
  document.title = "кнопка третья";
  return (<div>Кнопка 3</div>);
}
//логотип
class Logotype extends React.Component {
render(){   
  var logostyle = {
     zIndex:1,
     position: "absolute",
     top:10,
     height:64,
     width:74,
     left:15};
       return( 
  <img src={this.props.piclogo} style={logostyle} onClick={this.props.onClick}/>);}}
  //Меню навигации
class LogoS extends React.Component {
  constructor(props) {
super(props);
this.state = {
  an: "0px",
  barstate:true,
  bm:true,
//  isMobile: false
};

this.capp = this.capp.bind(this);
this.maunting = this.maunting.bind(this);
  }

  capp() {
    const isBar = this.state.barstate;
    if (isBar){   
  this.setState({
  barstate: false
  
    });
    }else{
        this.setState({
  bm:true,
  barstate: true
    });
    }
}
maunting () {
 this.setState({
  bm: false
    });
}

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        bm:false,
        barstate:false
      });
    }
  }

 render () {
   const isBar = this.state.barstate;
 const isem= this.state.bm;
   let barel;
   let logo;
   let barelement;
   logo=<Logotype piclogo="/logoS.png" onClick={this.capp}/>;
   barelement=<LeftBar {...this.props}/>;
   if (isem)
   {
     barel=barelement;
   }  else {barel= <div> </div>;}    

    

    
  return (
       <React.Fragment>
  
      <CSSTransition classNames="alert" in={isBar}  timeout={1000}onExited={() =>this.maunting()}>
    {barel}
     </CSSTransition>
    {logo}
     </React.Fragment>
  );
}
}

  //Шапка
class Header extends React.Component {
render() {
   var head = {
zIndex:1,
padding: 20,
backgroundColor: "#c2f0f0",
color: "#0D0099",
fontFamily: "monospace",
fontSize: 30,
textAlign: "center",
top:0,
left:0,
position: "relative",
};
return (
<div style={head}>
<b>{this.props.headname}</b>
</div>
);
}
}

//Кнопка меню
class ButtonLeft extends React.Component {
constructor(props) {
super(props);
this.state = {
strikes: 'white',
isMobile: false
};
this.ment = this.ment.bind(this);
this.mout = this.mout.bind(this);
}
ment(e) {
this.setState({
strikes:'yellow'
});
}
mout(e) {
this.setState({
strikes:'white'
});
}


  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        isMobile: true
      });
    }
  }

 render () {
const mobileT=this.state.isMobile;
 var bss = {
width:200,
height:60,
marginLeft:40,
marginTop: this.props.topmargin,
borderRadius:5,
backgroundColor:this.state.strikes,
color: "#0D0099",
fontFamily: "monospace",
fontSize: 20,
textAlign: "center",
float: "center",
display:"block",
position: "relative",
};
 var bssmobile = {
width:100,
height:30,
marginLeft:20,
marginTop: this.props.topmargin,
borderRadius:5,
backgroundColor:this.state.strikes,
color: "#0D0099",
fontFamily: "monospace",
fontSize: 12,
textAlign: "center",
float: "center",
display:"block",
position: "relative",
};
  if (mobileT)
  {
  return (
    <button onMouseEnter={this.ment} style={bssmobile} onMouseLeave={this.mout} onClick={this.props.act}>  {this.props.butonname}</button>
  
  );
  } else {
    return (
    <button onMouseEnter={this.ment} style={bss} onMouseLeave={this.mout} onClick={this.props.act}>  {this.props.butonname}</button>
  
  );
  }
}
}
//Управление для меню 
class Mm extends React.Component {
  constructor(props) {
super(props);
this.act1 = this.act1.bind(this);
this.act2 = this.act2.bind(this);
this.act3 = this.act3.bind(this);
this.state = {
isMobile: false,
buttonc:1
};
  }
  act1() {
  this.setState({buttonc:1}); 
  }
   act2() {
  this.setState({buttonc:2});
  }
   act3() {
   this.setState({buttonc:3});
  }

render() {
  const buttonC=this.state.buttonc;
  let content;
  if (buttonC===1)
  {content = <PageOne/>;}
   if (buttonC===2)
  {content = <PageTwo/>;}
   if (buttonC===3)
  {content = <PageThree/>;}
  return (
    <div>
    <LogoS act1={this.act1} act2={this.act2} act3={this.act3}/>
  <Main>
  {content}
  </Main>
   </div>
  );
}
}


//Боковая панель
class LeftBar extends React.Component {
  constructor(props) {
super(props);
this.state = {
isMobile: false

};
  }
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        isMobile: true
      });

      
    }

  }

render() {
  const mobileT=this.state.isMobile;
   var bar = {
width:280,
height:"100%",
backgroundColor: "#6274D0",
color: "#0D0099",
fontFamily: "monospace",
fontSize: 30,
textAlign: "center",
float: "left",
position:"fixed",
left:8,
top:8
};
   var barmobile = {
width:140,
height:window.innerHeight,
backgroundColor: "#6274D0",
color: "#0D0099",
fontFamily: "monospace",
fontSize: 15,
textAlign: "center",
float: "left",
position:"fixed",
left:8,
top:85
};
  
  if (mobileT)
  {
return (
<div style={barmobile}>
<ButtonLeft butonname="Справочник" topmargin="100px" act={this.props.act1}/>
<ButtonLeft butonname="Справочник" topmargin="10px" act={this.props.act2}/>
<ButtonLeft butonname="Справочник"topmargin="10px" act={this.props.act3}/>
</div>
);
} else {
  return (
  

<div style={bar}>

<ButtonLeft butonname="Справочник" topmargin="125px" act={this.props.act1}/>
<ButtonLeft butonname="Справочник" topmargin="10px" act={this.props.act2}/>
<ButtonLeft butonname="Справочник"topmargin="10px" act={this.props.act3}/>
</div>

);
}
}
}
class Main extends React.Component {
    constructor(props) {
super(props);
this.state = {
isMobile: false
};
  }
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        isMobile: true
      });

      
    }

  }
render() {
   const mobileT=this.state.isMobile;
var mainstyle = {
width:1105,
height:"100%",
backgroundColor: "#f8f8ff",
marginLeft:280,
padding: 30,
minHeight:1000,
fontFamily: "serif",
fontSize: 20,
paddingLeft:60,
paddingRight:60,
};
var mainmobile = {
  zIndex:-1,
width:window.Width,
backgroundColor: "#f8f8ff",
minHeight:window.innerHeight,
fontFamily: "serif",
fontSize: 15,
paddingLeft:10,
paddingRight:10,
paddingTop:10,
position: "relative",
marginTop:3

};
if (mobileT) {
 return (
   <div style={mainmobile}>
  {this.props.children}
      </div>
 );
} else {
   return (
   <div style={mainstyle}>
  {this.props.children}
      </div>
   );
}
}
}
ReactDOM.render(
  <div>
  <Header headname="Site name"/>
<Mm/>
</div>,
  appRoot
);
