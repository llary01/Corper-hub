// Static data: room types, states, costs, seed listings
const TYPES=['Self-contained room','Room and parlour','Single room','Shared apartment'];
const STATES={Lagos:['Yaba','Ikeja','Lekki','Surulere'],Abuja:['Gwarinpa','Kubwa','Wuse','Lugbe'],Rivers:['Port Harcourt','Rumuokoro'],Oyo:['Ibadan','Bodija'],Kaduna:['Kaduna','Barnawa'],Enugu:['Independence Layout','Trans-Ekulu'],Kano:['Nassarawa','Bompai'],Ogun:['Abeokuta','Sagamu']};
const COST={Lagos:[18000,26000],Abuja:[15000,24000],Rivers:[14000,22000],Oyo:[9000,16000],Kaduna:[8000,15000],Enugu:[9000,16000],Kano:[8000,14000],Ogun:[9000,15000]};
const SEED=[
{id:'s1',type:TYPES[0],price:450000,area:'Yaba',state:'Lagos',r:4.6,n:12,v:1,f:1,owner:'Mrs Adeyemi',phone:'08031110001',d:'Tiled room with prepaid meter, running water and a gated compound five minutes from the bus stop.'},
{id:'s2',type:TYPES[0],price:380000,area:'Gwarinpa',state:'Abuja',r:4.4,n:9,v:1,f:1,owner:'Mr Bello',phone:'08031110002',d:'Quiet estate, borehole water, 24-hour security and a shared kitchen.'},
{id:'s3',type:TYPES[1],price:600000,area:'Lekki',state:'Lagos',r:4.8,n:15,v:1,f:1,owner:'Ikenna Homes',phone:'08031110003',d:'Room and parlour with a fitted kitchen and tarred road access.'},
{id:'s4',type:TYPES[2],price:180000,area:'Bodija',state:'Oyo',r:4.2,n:6,v:1,owner:'Mr Ogunleye',phone:'08031110004',d:'Single room near the market, shared bathroom, steady light.'},
{id:'s5',type:TYPES[0],price:320000,area:'Port Harcourt',state:'Rivers',r:4.3,n:8,v:1,owner:'Mrs Okafor',phone:'08031110005',d:'Self-contained room close to the NYSC orientation route.'},
{id:'s6',type:TYPES[3],price:150000,area:'Kaduna',state:'Kaduna',r:4.0,n:5,v:0,owner:'Mr Musa',phone:'08031110006',d:'Bed space in a shared apartment, three corpers already living there.'},
{id:'s7',type:TYPES[0],price:280000,area:'Independence Layout',state:'Enugu',r:4.5,n:7,v:1,owner:'Mrs Eze',phone:'08031110007',d:'Fenced compound, tiled floor, wardrobe and water heater.'},
{id:'s8',type:TYPES[1],price:520000,area:'Kubwa',state:'Abuja',r:4.1,n:10,v:1,owner:'Mr Danjuma',phone:'08031110008',d:'Room and parlour on a quiet street near the park.'},
{id:'s9',type:TYPES[2],price:200000,area:'Abeokuta',state:'Ogun',r:4.0,n:4,v:0,owner:'Mr Sodiq',phone:'08031110009',d:'Single room, good road, close to the secondary school.'}];
const COL=[['#1e8450','#0f2a23'],['#f0b030','#1e8450'],['#2b6e8f','#0f2a23'],['#7a5c2e','#1e8450']];
