import{a as B,b as N}from"./chunk-52LDK5Z3.js";import{f as C,g as F,h as E,i as O,j as G,k as I,l as R,n as a,o as K,p as W,s as z}from"./chunk-LAOCUGHG.js";import{$ as x,$a as S,Hb as M,Ib as w,Jb as q,Kb as L,La as P,Mb as j,Na as m,Pa as i,Q as k,Qa as o,Ra as b,Sa as v,Ta as g,Ua as u,Ya as d,Za as h,_ as T,ab as A,bb as _,cb as D,ga as p,ha as y,wa as c,xa as f}from"./chunk-PAVCJRYY.js";function J(s,t){s&1&&(i(0,"span"),d(1,"Puedes seleccionar a un jugador como base de las estad\xEDsticas "),o())}function Q(s,t){if(s&1&&(i(0,"option",11),d(1),o()),s&2){let r=t.$implicit;m("value",r.Rk),c(),S(" ",r.Player," (",r.Squad,") ")}}function U(s,t){if(s&1){let r=v();i(0,"select",9),D("ngModelChange",function(l){p(r);let e=u();return _(e.selectedPlayerRk,l)||(e.selectedPlayerRk=l),y(l)}),P(1,Q,2,3,"option",10),o()}if(s&2){let r=u();A("ngModel",r.selectedPlayerRk),c(),m("ngForOf",r.players)}}function X(s,t){if(s&1){let r=v();i(0,"button",12),g("click",function(){p(r);let l=u();return y(l.pickPlayer(l.selectedPlayerRk))}),d(1,"Seleccionar"),o()}}function Z(s,t){if(s&1){let r=v();i(0,"button",12),g("click",function(){p(r);let l=u();return y(l.sendForm())}),d(1,"Predecir"),o()}}function $(s,t){if(s&1){let r=v();i(0,"button",12),g("click",function(){p(r);let l=u();return y(l.resetForm())}),d(1,"Volver"),o()}}function ee(s,t){if(s&1&&(i(0,"div",16),b(1,"img",17),i(2,"h3"),d(3),o()()),s&2){let r=u(2);c(3),h(r.posicion)}}function ae(s,t){if(s&1&&(i(0,"div",16),b(1,"img",18),i(2,"h3"),d(3),o()()),s&2){let r=u(2);c(3),h(r.posicion)}}function se(s,t){if(s&1&&(i(0,"div",16),b(1,"img",19),i(2,"h3"),d(3),o()()),s&2){let r=u(2);c(3),h(r.posicion)}}function te(s,t){if(s&1&&(i(0,"div",16),b(1,"img",20),i(2,"h3"),d(3),o()()),s&2){let r=u(2);c(3),h(r.posicion)}}function le(s,t){if(s&1&&(i(0,"div",13)(1,"div",14),P(2,ee,4,1,"div",15)(3,ae,4,1,"div",15)(4,se,4,1,"div",15)(5,te,4,1,"div",15),o()()),s&2){let r=u();c(),m("ngSwitch",r.posicion),c(),m("ngSwitchCase","Portero"),c(),m("ngSwitchCase","Defensa"),c(),m("ngSwitchCase","Mediocampista"),c(),m("ngSwitchCase","Delantero")}}function ie(s,t){if(s&1&&(i(0,"div")(1,"h3"),d(2,"Rellena cada campo"),o(),b(3,"app-formulario",21),o()),s&2){let r=u();c(3),m("fields",r.form)}}var Y=(()=>{let t=class t{constructor(n){this.jugadoresService=n,this.players=[],this.selectedPlayerRk=null,this.selectedPlayer=null,this.form=[{name:"Age",label:"Edad",min:15,max:50,disabled:!1,type:a.number,value:0},{name:"Born",label:"Nacimiento",min:1970,max:2010,disabled:!1,type:a.number,value:0},{name:"MP",label:"Partidos jugados",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"Starts",label:"Partidos jugados de inicio",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"Min",label:"Minutos jugados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"90s",label:"Minutos jugados/partido",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"Goals",label:"Goles",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"Shots",label:"Tiros",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"SoT",label:"Tiros a puerta",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"SoT%",label:"Precisi\xF3n de los tiros a puerta",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"G/Sh",label:"Goles/Tiro",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"G/SoT",label:"Goles/Tiro a puerta",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"ShoDist",label:"Distancia de tiro (yardas)",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"ShoFK",label:"Lanzamientos de falta",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"ShoPK",label:"Penaltis marcados",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"PKatt",label:"Penaltis lanzados",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"PasTotCmp",label:"Pases totales completados",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasTotAtt",label:"Pases totales intentados",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasTotCmp%",label:"Precisi\xF3n de los pases",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"PasTotDist",label:"Distancia recorrida por los pases",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasTotPrgDist",label:"Distancia de los pases progresivos",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasShoCmp",label:"Pases que acaban en tiro completados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasShoAtt",label:"Pases que acaban en tiro intentados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasShoCmp%",label:"Precisi\xF3n de pases que llevan a tiro",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"PasMedCmp",label:"Pases completados en 1/2 campo",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasMedAtt",label:"Pases intentados en 1/2 campo",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasMedCmp%",label:"Precisi\xF3n de pase en 1/2 campo",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"PasLonCmp",label:"Pases largos completados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasLonAtt",label:"Pases largos intentados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasLonCmp%",label:"Precisi\xF3n de pase largo",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"Assists",label:"Asistencias",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"PasAss",label:"Pases que acaban en asistencia",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Pas3rd",label:"Pases en tercio final",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PPA",label:"Pases en el \xE1rea rival completados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CrsPA",label:"Centros completados",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasProg",label:"Pases progresivos",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasAtt",label:"Pases intentados",min:0,max:1e7,disabled:!1,type:a.number,value:0},{name:"PasLive",label:"Pases con bal\xF3n en juego",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasDead",label:"Pases a bal\xF3n parado",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasFK",label:"Pases sacados de una falta",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TB",label:"Balones al espacio realizados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"Sw",label:"Cambio de juego (Pase de una banda a otra)",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasCrs",label:"Balones colgados al \xE1rea",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TI",label:"Toques con el interior",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"CK",label:"Saques de esquina",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CkIn",label:"Saques de esquina cerrados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CkOut",label:"Saques de esquina abiertos",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CkStr",label:"Saques de esquina rectos",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasCmp",label:"Pases completados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"PasOff",label:"Pases a un jugador en fuera de juego",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"PasBlocks",label:"Pases bloqueados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"SCA",label:"Acciones de creacion de disparo (Pases clave, regates...)",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"ScaPassLive",label:"Pases que llevan a un intento de disparo",min:1,max:100,disabled:!1,type:a.number,value:0},{name:"ScaPassDead",label:"Pases a bal\xF3n parado que llevan a un intento de disparo",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"ScaDrib",label:"Acciones de creacion de disparo con regate",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"ScaSh",label:"Rechaces",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"ScaFld",label:"Faltas que llevan a un intento de disparo",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"ScaDef",label:"Rechace que llevan a un intento de disparo (en contra)",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"GCA",label:"Acciones de creacion de gol",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaPassLive",label:"Acciones de creacion de gol con bal\xF3n en juego",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaPassDead",label:"Acciones de creacion de gol con pase a bal\xF3n parado",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaDrib",label:"Acciones de creacion de gol regateando",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaSh",label:"Rebotes",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaFld",label:"Acciones de creacion de gol a partir de una falta",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"GcaDef",label:"Acciones defensivas que acaban en gol",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"Tkl",label:"Entradas",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TklWon",label:"Entradas ganadas",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"TklDef3rd",label:"Entradas en el 1/3",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"TklMid3rd",label:"Entradas en 1/2",min:0,max:1e7,disabled:!1,type:a.number,value:0},{name:"TklAtt3rd",label:"Entradas en 3/3",min:0,max:1e6,disabled:!1,type:a.number,value:0},{name:"TklDri",label:"Regateadores bloqueados",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TklDriAtt",label:"N\xFAmero de intentos de detener un regate",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"TklDri%",label:"Porcentaje de regates detenidos",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"TklDriPast",label:"N\xFAmero de veces regateado",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Blocks",label:"Bloqueos",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"BlkSh",label:"Bloqueos de tiro",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"BlkPass",label:"Bloqueos de pase (acaba en posesion del rival)",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Int",label:"Intercepciones (no siempre acaba en posesion del rival)",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Tkl+Int",label:"Entradas e intercepciones",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"Clr",label:"Despejes",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Err",label:"Errores que llevan a que el oponente tire",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"Touches",label:"Toques",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TouDefPen",label:"Toques en el area de penalti",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"TouDef3rd",label:"Toques en 1/3",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"TouMid3rd",label:"Toques en 1/2",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TouAtt3rd",label:"Toques en 3/3",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"TouAttPen",label:"Toques en el \xE1rea rival",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"TouLive",label:"Toques con bal\xF3n en juego",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"ToAtt",label:"Intentos de regate",min:10,max:1e4,disabled:!1,type:a.number,value:0},{name:"ToSuc",label:"Regates completados",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"ToSuc%",label:"Porcentaje de regates completados",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"ToTkl",label:"Regates fallidos",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"ToTkl%",label:"Porcentaje de regates fallidos",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"Carries",label:"Toques ofensivos",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CarTotDist",label:"Distancia recorrida (yardas) en carrera",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CarPrgDist",label:"Distancia recorrida (yardas) en carrera (progresivo)",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"CarProg",label:"N\xFAmero de veces que lleva el bal\xF3n a \xE1rea rival",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Car3rd",label:"N\xFAmero de veces que lleva el bal\xF3n al 3/3",min:0,max:1e5,disabled:!1,type:a.number,value:0},{name:"CPA",label:"Llevar el bal\xF3n hacia el \xE1rea rival",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"CarMis",label:"Controles de bal\xF3n fallidos",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"CarDis",label:"N\xFAmero de posesiones perdidas",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Rec",label:"N\xFAmero de veces que un jugador recibi\xF3 un pase",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"RecProg",label:"N\xFAmero de veces que un jugador recibi\xF3 un pase progresivo",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"CrdY",label:"Tarjetas amarillas",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"CrdR",label:"Tarjetas rojas",min:0,max:100,disabled:!1,type:a.number,value:0},{name:"2CrdY",label:"Segundas tarjetas amarillas",min:0,max:1e3,disabled:!1,type:a.number,value:0},{name:"Fls",label:"Faltas",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Fld",label:"Faltas recibidas",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Off",label:"Fueras de juego",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Crs",label:"Centros",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"TklW",label:"Entradas ganadas",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"PKwon",label:"Penaltis provocados(favorable)",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"PKcon",label:"Penaltis provocados (en contra)",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"OG",label:"Autogoles",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"Recov",label:"Recuperaciones",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"AerWon",label:"Duelos a\xE9reos ganados",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"AerLost",label:"Duelos a\xE9reos perdidos",min:0,max:1e4,disabled:!1,type:a.number,value:0},{name:"AerWon%",label:"Porcentaje de duelos a\xE9reos ganados",min:0,max:100,disabled:!1,type:a.number,value:0}],this.posicion=""}ngOnInit(){this.jugadoresService.getPlayers().subscribe(n=>{this.players=n,this.players.sort((l,e)=>l.Player.localeCompare(e.Player))})}pickPlayer(n){if(n===null){console.error("El valor seleccionado es nulo. Por favor, seleccione un jugador v\xE1lido.");return}this.jugadoresService.getPlayerByRk(n).subscribe(l=>{l&&l.length>0&&(this.selectedPlayer=l[0],console.log(`Jugador seleccionado: ${this.selectedPlayer.Player}`),this.form.forEach(e=>{switch(e.name){case"Rk":e.value=this.selectedPlayer?.Rk||0;break;case"Player":e.value=this.selectedPlayer?.Player||"";break;case"Nation":e.value=this.selectedPlayer?.Nation||"";break;case"Pos":e.value=this.selectedPlayer?.Pos!==void 0?this.selectedPlayer.Pos:e.value;break;case"Squad":e.value=this.selectedPlayer?.Squad||"";break;case"Comp":e.value=this.selectedPlayer?.Comp||"";break;case"Age":e.value=this.selectedPlayer?.Age||0;break;case"Born":e.value=this.selectedPlayer?.Born||0;break;case"MP":e.value=this.selectedPlayer?.MP||0;break;case"Starts":e.value=this.selectedPlayer?.Starts||0;break;case"Min":e.value=this.selectedPlayer?.Min||0;break;case"90s":e.value=this.selectedPlayer?this.selectedPlayer["90s"]:0;break;case"Goals":e.value=this.selectedPlayer?.Goals||0;break;case"Shots":e.value=this.selectedPlayer?.Shots||0;break;case"SoT":e.value=this.selectedPlayer?.SoT||0;break;case"SoT%":e.value=this.selectedPlayer?this.selectedPlayer["SoT%"]:0;break;case"G/Sh":e.value=this.selectedPlayer?this.selectedPlayer["G/Sh"]:0;break;case"G/SoT":e.value=this.selectedPlayer?this.selectedPlayer["G/SoT"]:0;break;case"ShoDist":e.value=this.selectedPlayer?this.selectedPlayer.ShoDist:0;break;case"ShoFK":e.value=this.selectedPlayer?this.selectedPlayer.ShoFK:0;break;case"ShoPK":e.value=this.selectedPlayer?this.selectedPlayer.ShoPK:0;break;case"PKatt":e.value=this.selectedPlayer?this.selectedPlayer.PKatt:0;break;case"PasTotCmp":e.value=this.selectedPlayer?this.selectedPlayer.PasTotCmp:0;break;case"PasTotAtt":e.value=this.selectedPlayer?this.selectedPlayer.PasTotAtt:0;break;case"PasTotCmp%":e.value=this.selectedPlayer?this.selectedPlayer["PasTotCmp%"]:0;break;case"PasTotDist":e.value=this.selectedPlayer?this.selectedPlayer.PasTotDist:0;break;case"PasTotPrgDist":e.value=this.selectedPlayer?this.selectedPlayer.PasTotPrgDist:0;break;case"PasShoCmp":e.value=this.selectedPlayer?this.selectedPlayer.PasShoCmp:0;break;case"PasShoAtt":e.value=this.selectedPlayer?this.selectedPlayer.PasShoAtt:0;break;case"PasShoCmp%":e.value=this.selectedPlayer?this.selectedPlayer["PasShoCmp%"]:0;break;case"PasMedCmp":e.value=this.selectedPlayer?this.selectedPlayer.PasMedCmp:0;break;case"PasMedAtt":e.value=this.selectedPlayer?this.selectedPlayer.PasMedAtt:0;break;case"PasMedCmp%":e.value=this.selectedPlayer?this.selectedPlayer["PasMedCmp%"]:0;break;case"PasLonCmp":e.value=this.selectedPlayer?this.selectedPlayer.PasLonCmp:0;break;case"PasLonAtt":e.value=this.selectedPlayer?this.selectedPlayer.PasLonAtt:0;break;case"PasLonCmp%":e.value=this.selectedPlayer?this.selectedPlayer["PasLonCmp%"]:0;break;case"Assists":e.value=this.selectedPlayer?this.selectedPlayer.Assists:0;break;case"PasAss":e.value=this.selectedPlayer?this.selectedPlayer.PasAss:0;break;case"Pas3rd":e.value=this.selectedPlayer?this.selectedPlayer.Pas3rd:0;break;case"PPA":e.value=this.selectedPlayer?this.selectedPlayer.PPA:0;break;case"CrsPA":e.value=this.selectedPlayer?this.selectedPlayer.CrsPA:0;break;case"PasProg":e.value=this.selectedPlayer?this.selectedPlayer.PasProg:0;break;case"PasAtt":e.value=this.selectedPlayer?this.selectedPlayer.PasAtt:0;break;case"PasLive":e.value=this.selectedPlayer?this.selectedPlayer.PasLive:0;break;case"PasDead":e.value=this.selectedPlayer?this.selectedPlayer.PasDead:0;break;case"PasFK":e.value=this.selectedPlayer?this.selectedPlayer.PasFK:0;break;case"TB":e.value=this.selectedPlayer?this.selectedPlayer.TB:0;break;case"Sw":e.value=this.selectedPlayer?this.selectedPlayer.Sw:0;break;case"PasCrs":e.value=this.selectedPlayer?this.selectedPlayer.PasCrs:0;break;case"TI":e.value=this.selectedPlayer?this.selectedPlayer.TI:0;break;case"CK":e.value=this.selectedPlayer?this.selectedPlayer.CK:0;break;case"CkIn":e.value=this.selectedPlayer?this.selectedPlayer.CkIn:0;break;case"CkOut":e.value=this.selectedPlayer?this.selectedPlayer.CkOut:0;break;case"CkStr":e.value=this.selectedPlayer?this.selectedPlayer.CkStr:0;break;case"PasCmp":e.value=this.selectedPlayer?this.selectedPlayer.PasCmp:0;break;case"PasOff":e.value=this.selectedPlayer?this.selectedPlayer.PasOff:0;break;case"PasBlocks":e.value=this.selectedPlayer?this.selectedPlayer.PasBlocks:0;break;case"SCA":e.value=this.selectedPlayer?this.selectedPlayer.SCA:0;break;case"ScaPassLive":e.value=this.selectedPlayer?this.selectedPlayer.ScaPassLive:0;break;case"ScaPassDead":e.value=this.selectedPlayer?this.selectedPlayer.ScaPassDead:0;break;case"ScaDrib":e.value=this.selectedPlayer?this.selectedPlayer.ScaDrib:0;break;case"ScaSh":e.value=this.selectedPlayer?this.selectedPlayer.ScaSh:0;break;case"ScaFld":e.value=this.selectedPlayer?this.selectedPlayer.ScaFld:0;break;case"ScaDef":e.value=this.selectedPlayer?this.selectedPlayer.ScaDef:0;break;case"GCA":e.value=this.selectedPlayer?this.selectedPlayer.GCA:0;break;case"GcaPassLive":e.value=this.selectedPlayer?this.selectedPlayer.GcaPassLive:0;break;case"GcaPassDead":e.value=this.selectedPlayer?this.selectedPlayer.GcaPassDead:0;break;case"GcaDrib":e.value=this.selectedPlayer?this.selectedPlayer.GcaDrib:0;break;case"GcaSh":e.value=this.selectedPlayer?this.selectedPlayer.GcaSh:0;break;case"GcaFld":e.value=this.selectedPlayer?this.selectedPlayer.GcaFld:0;break;case"GcaDef":e.value=this.selectedPlayer?this.selectedPlayer.GcaDef:0;break;case"Tkl":e.value=this.selectedPlayer?this.selectedPlayer.Tkl:0;break;case"TklWon":e.value=this.selectedPlayer?this.selectedPlayer.TklWon:0;break;case"TklDef3rd":e.value=this.selectedPlayer?this.selectedPlayer.TklDef3rd:0;break;case"TklMid3rd":e.value=this.selectedPlayer?this.selectedPlayer.TklMid3rd:0;break;case"TklAtt3rd":e.value=this.selectedPlayer?this.selectedPlayer.TklAtt3rd:0;break;case"TklDri":e.value=this.selectedPlayer?this.selectedPlayer.TklDri:0;break;case"TklDriAtt":e.value=this.selectedPlayer?this.selectedPlayer.TklDriAtt:0;break;case"TklDri%":e.value=this.selectedPlayer?this.selectedPlayer["TklDri%"]:0;break;case"TklDriPast":e.value=this.selectedPlayer?this.selectedPlayer.TklDriPast:0;break;case"Blocks":e.value=this.selectedPlayer?this.selectedPlayer.Blocks:0;break;case"BlkSh":e.value=this.selectedPlayer?this.selectedPlayer.BlkSh:0;break;case"BlkPass":e.value=this.selectedPlayer?this.selectedPlayer.BlkPass:0;break;case"Int":e.value=this.selectedPlayer?this.selectedPlayer.Int:0;break;case"Tkl+Int":e.value=this.selectedPlayer?this.selectedPlayer["Tkl+Int"]:0;break;case"Clr":e.value=this.selectedPlayer?this.selectedPlayer.Clr:0;break;case"Err":e.value=this.selectedPlayer?this.selectedPlayer.Err:0;break;case"Touches":e.value=this.selectedPlayer?this.selectedPlayer.Touches:0;break;case"TouDefPen":e.value=this.selectedPlayer?this.selectedPlayer.TouDefPen:0;break;case"TouDef3rd":e.value=this.selectedPlayer?this.selectedPlayer.TouDef3rd:0;break;case"TouMid3rd":e.value=this.selectedPlayer?this.selectedPlayer.TouMid3rd:0;break;case"TouAtt3rd":e.value=this.selectedPlayer?this.selectedPlayer.TouAtt3rd:0;break;case"TouAttPen":e.value=this.selectedPlayer?this.selectedPlayer.TouAttPen:0;break;case"TouLive":e.value=this.selectedPlayer?this.selectedPlayer.TouLive:0;break;case"ToAtt":e.value=this.selectedPlayer?this.selectedPlayer.ToAtt:0;break;case"ToSuc":e.value=this.selectedPlayer?this.selectedPlayer.ToSuc:0;break;case"ToSuc%":e.value=this.selectedPlayer?this.selectedPlayer["ToSuc%"]:0;break;case"ToTkl":e.value=this.selectedPlayer?this.selectedPlayer.ToTkl:0;break;case"ToTkl%":e.value=this.selectedPlayer?this.selectedPlayer["ToTkl%"]:0;break;case"Carries":e.value=this.selectedPlayer?this.selectedPlayer.Carries:0;break;case"CarTotDist":e.value=this.selectedPlayer?this.selectedPlayer.CarTotDist:0;break;case"CarPrgDist":e.value=this.selectedPlayer?this.selectedPlayer.CarPrgDist:0;break;case"CarProg":e.value=this.selectedPlayer?this.selectedPlayer.CarProg:0;break;case"Car3rd":e.value=this.selectedPlayer?this.selectedPlayer.Car3rd:0;break;case"CPA":e.value=this.selectedPlayer?this.selectedPlayer.CPA:0;break;case"CarMis":e.value=this.selectedPlayer?this.selectedPlayer.CarMis:0;break;case"CarDis":e.value=this.selectedPlayer?this.selectedPlayer.CarDis:0;break;case"Rec":e.value=this.selectedPlayer?this.selectedPlayer.Rec:0;break;case"RecProg":e.value=this.selectedPlayer?this.selectedPlayer.RecProg:0;break;case"CrdY":e.value=this.selectedPlayer?this.selectedPlayer.CrdY:0;break;case"CrdR":e.value=this.selectedPlayer?this.selectedPlayer.CrdR:0;break;case"2CrdY":e.value=this.selectedPlayer?this.selectedPlayer["2CrdY"]:0;break;case"Fls":e.value=this.selectedPlayer?this.selectedPlayer.Fls:0;break;case"Fld":e.value=this.selectedPlayer?this.selectedPlayer.Fld:0;break;case"Off":e.value=this.selectedPlayer?this.selectedPlayer.Off:0;break;case"Crs":e.value=this.selectedPlayer?this.selectedPlayer.Crs:0;break;case"TklW":e.value=this.selectedPlayer?this.selectedPlayer.TklW:0;break;case"PKwon":e.value=this.selectedPlayer?this.selectedPlayer.PKwon:0;break;case"PKcon":e.value=this.selectedPlayer?this.selectedPlayer.PKcon:0;break;case"OG":e.value=this.selectedPlayer?this.selectedPlayer.OG:0;break;case"Recov":e.value=this.selectedPlayer?this.selectedPlayer.Recov:0;break;case"AerWon":e.value=this.selectedPlayer?this.selectedPlayer.AerWon:0;break;case"AerLost":e.value=this.selectedPlayer?this.selectedPlayer.AerLost:0;break;case"AerWon%":e.value=this.selectedPlayer?this.selectedPlayer["AerWon%"]:0;break;default:break}}))})}convertToNumber(n){return Number(n)}updatePlayerData(){this.form.forEach(n=>{let l=this.convertToNumber(n.value);this.selectedPlayer&&(this.selectedPlayer[n.name]=l)})}sendForm(){this.updatePlayerData();let n={Rk:1,Player:"",Nation:"",Pos:0,Age:0,Born:0,Squad:"",Comp:B.LaLiga,MP:0,Starts:0,Min:0,"90s":0,Goals:0,Shots:0,SoT:0,"SoT%":0,"G/Sh":0,"G/SoT":0,ShoDist:0,ShoFK:0,ShoPK:0,PKatt:0,PasTotCmp:0,PasTotAtt:0,"PasTotCmp%":0,PasTotDist:0,PasTotPrgDist:0,PasShoCmp:0,PasShoAtt:0,"PasShoCmp%":0,PasMedCmp:0,PasMedAtt:0,"PasMedCmp%":0,PasLonCmp:0,PasLonAtt:0,"PasLonCmp%":0,Assists:0,PasAss:0,Pas3rd:0,PPA:0,CrsPA:0,PasProg:0,PasAtt:0,PasLive:0,PasDead:0,PasFK:0,TB:0,Sw:0,PasCrs:0,TI:0,CK:0,CkIn:0,CkOut:0,CkStr:0,PasCmp:0,PasOff:0,PasBlocks:0,SCA:0,ScaPassLive:0,ScaPassDead:0,ScaDrib:0,ScaSh:0,ScaFld:0,ScaDef:0,GCA:0,GcaPassLive:0,GcaPassDead:0,GcaDrib:0,GcaSh:0,GcaFld:0,GcaDef:0,Tkl:0,TklWon:0,TklDef3rd:0,TklMid3rd:0,TklAtt3rd:0,TklDri:0,TklDriAtt:0,"TklDri%":0,TklDriPast:0,Blocks:0,BlkSh:0,BlkPass:0,Int:0,"Tkl+Int":0,Clr:0,Err:0,Touches:0,TouDefPen:0,TouDef3rd:0,TouMid3rd:0,TouAtt3rd:0,TouAttPen:0,TouLive:0,ToAtt:0,ToSuc:0,"ToSuc%":0,ToTkl:0,"ToTkl%":0,Carries:0,CarTotDist:0,CarPrgDist:0,CarProg:0,Car3rd:0,CPA:0,CarMis:0,CarDis:0,Rec:0,RecProg:0,CrdY:0,CrdR:0,"2CrdY":0,Fls:0,Fld:0,Off:0,Crs:0,TklW:0,PKwon:0,PKcon:0,OG:0,Recov:0,AerWon:0,AerLost:0,"AerWon%":0};this.form.forEach(l=>{n[l.name]=l.value}),this.jugadoresService.guessPosition(n).subscribe(l=>{this.posicion=l.posicion},l=>{console.error("Error al enviar los datos:",l)})}resetForm(){this.form.forEach(n=>{n.value=""}),this.posicion=""}};t.\u0275fac=function(l){return new(l||t)(f(N))},t.\u0275cmp=T({type:t,selectors:[["app-adivina-la-posicion"]],decls:30,vars:7,consts:[[1,"main"],[1,"selecciona"],[1,"title"],[1,"text-options"],[4,"ngIf"],["class","jugadores",3,"ngModel","ngModelChange",4,"ngIf"],[1,"buttons"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","prediccion",4,"ngIf"],[1,"jugadores",3,"ngModelChange","ngModel"],["class","jugador",3,"value",4,"ngFor","ngForOf"],[1,"jugador",3,"value"],[1,"btn","btn-primary",3,"click"],[1,"prediccion"],[3,"ngSwitch"],["class","posicion-predecida",4,"ngSwitchCase"],[1,"posicion-predecida"],["src","../../../assets/imgs/portero.png","alt","Silueta del portero"],["src","../../../assets/imgs/defensa.png","alt","Silueta del defensa"],["src","../../../assets/imgs/centrocampista.png","alt","Silueta del mediocampista"],["src","../../../assets/imgs/delantero.png","alt","Silueta del delantero"],[3,"fields"]],template:function(l,e){l&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),d(4,"Predice la posici\xF3n de un jugador en base a sus estad\xEDsticas:"),o(),b(5,"hr"),i(6,"p"),d(7," n_estimators: N\xFAmero de \xE1rboles en el bosque (100). (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado). "),o(),i(8,"p"),d(9,' criterion: La funci\xF3n para medir la calidad de una divisi\xF3n ("gini") (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado).'),o(),i(10,"p"),d(11," max_depth: Profundidad m\xE1xima de los \xE1rboles de decisi\xF3n (None) (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado). "),o(),i(12,"p"),d(13," min_samples_split: N\xFAmero m\xEDnimo de muestras requeridas para dividir un nodo interno (2) (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado). "),o(),i(14,"p"),d(15," min_samples_leaf: N\xFAmero m\xEDnimo de muestras requeridas para estar en un nodo hoja (1) (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado). "),o(),i(16,"p"),d(17,' max_features: N\xFAmero de caracter\xEDsticas a considerar cuando se busca la mejor divisi\xF3n ("auto") (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado). '),o(),i(18,"p"),d(19," bootstrap: Indica si se debe utilizar el m\xE9todo de remuestreo bootstrap (True) (Hemos utilizado este valor ya que es el que mejor resultado nos ha dado)."),o()(),b(20,"hr"),i(21,"div",3),P(22,J,2,0,"span",4)(23,U,2,2,"select",5),i(24,"div",6),P(25,X,2,0,"button",7)(26,Z,2,0,"button",7)(27,$,2,0,"button",7),o()(),P(28,le,6,5,"div",8)(29,ie,4,1,"div",4),o()()),l&2&&(c(22),m("ngIf",!e.posicion),c(),m("ngIf",!e.posicion),c(2),m("ngIf",!e.posicion),c(),m("ngIf",!e.posicion),c(),m("ngIf",e.posicion),c(),m("ngIf",e.posicion),c(),m("ngIf",!e.posicion))},dependencies:[M,w,q,L,G,I,O,F,E,K],styles:["*[_ngcontent-%COMP%]{padding:1%}form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;color:#9c843d}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;color:#fff}.text-options[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;justify-content:space-around}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-decoration:none;text-align:center;border:3px solid #9c843d;color:#9c843d;font-weight:700;background-color:#eae2c9;border-radius:50px;margin:1%;width:45vw;height:10vw;font-size:4vw}select[_ngcontent-%COMP%]{width:80%;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box}img[_ngcontent-%COMP%]{width:60vw}.posicion-predecida[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{color:#fff;text-align:justify}h3[_ngcontent-%COMP%]{text-align:center}.prediccion[_ngcontent-%COMP%]{opacity:0;transition:opacity 1s;animation:_ngcontent-%COMP%_appear 3s forwards;display:block;align-items:center;justify-content:center;width:100%;margin:auto;text-align:center}@keyframes _ngcontent-%COMP%_appear{0%{opacity:0}to{opacity:1}}@media only screen and (min-width: 1200px){.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-size:2.5vw}p[_ngcontent-%COMP%]{font-size:1.25vw}span[_ngcontent-%COMP%]{font-size:1.5vw}.btn[_ngcontent-%COMP%]{text-align:center;font-size:1vw;width:7.5vw;height:2vw}img[_ngcontent-%COMP%]{width:25vw}select[_ngcontent-%COMP%]{width:40%}.text-options[_ngcontent-%COMP%]{flex-direction:column;display:flex;align-items:center;flex-wrap:wrap;justify-content:center}}"]});let s=t;return s})();var re=[{path:"",component:W},{path:"predict-position",component:Y},{path:"**",redirectTo:""}],H=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=x({type:t}),t.\u0275inj=k({imports:[C.forChild(re),C]});let s=t;return s})();var fe=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=x({type:t}),t.\u0275inj=k({imports:[H,j,R,z]});let s=t;return s})();export{fe as ClasificationExampleModule};
