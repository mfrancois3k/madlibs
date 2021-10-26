function madlibs() {

    let player = prompt('Would you like Story One or Story Two');
            
if (player == 1 || player == 'one'|| player == 'One' ){
            let q1 = prompt("type an adjective");
            let q2 = prompt("type a general place");
            let q3 = prompt("type a vehicle name (plural)");
            let q4 = prompt("type the name of a game");
            let q5 = prompt("type a plural noun");
            let q6 = prompt("type an 'ing' verb");
            let q7 = prompt("type another 'ing' verb");
            let q8 = prompt("type a food name (plural)");
            let q9 = prompt("type the name of a sport");
            let q10 = prompt("type another 'ing' verb");
            let q11 = prompt("type an emotion");
            let q12 = prompt("type a number");
            
            let story1 ='A vacation is when you take a trip to some ' + q1 + ' place near an amazing ' + q2 + '. A good vacation place is one where you can ride ' + q3 + ' or play ' + q4 + ' or go hunting for ' + q5 + '. I like to spend my time ' + q6 + ' or ' + q7 + '. When parents go on a vacation, they spend their time eating three ' + q8 + ' a day. Usually, fathers play ' + q9 + ', and mothers spend their time ' + q10 + '. Adults need vacations more than kids because adults are always very ' + q11 + ' because they have to work ' + q12 + ' hours every day all year just to afford their vacations!';
            
            document.getElementById('story1').outerHTML = story1;
            
        }else 
        
        if (player == 2 || player == 'two' || player == 'Two' ){
                let a1 = prompt("type a plural noun")
                let a2 = prompt("type another adjective")
                let a3 = prompt("type a food (plural)")
                let a4 = prompt("type an emotion")
                let a5 = prompt("type an 'ing' verb")
                let a6 = prompt("type a common place")
                let a7 = prompt("type another adjective")
                let a8 = prompt("type a noun")
                let a9 = prompt("type another adjective")
                let a10 = prompt("type another noun")
                let a11 = prompt("type a family member")
                let a12 = prompt("type another adjective")
                let a13 = prompt("type a famous place")
                let a14 = prompt("type an adjective")
                
                let story2 = "Today we took a" + a1 + " fieldtrip to " + a2 + ". They're famous for making " + a3 + " and for cooking " + a4 + " " + a5 + ". Eating all that food made me feel " + a6 + ". Next we enjoyed the local tradition of " + a7 + " in the middle of the " + a8 + "! Finally, we went shopping for souvenirs. I bought a " + a9 + " " + a10 + " for myself, and a " + a11 + " " + a12 + " for my favorite " + a13 + ". I'll definitely never forget this " + a14 + " trip!";

                document.getElementById('story2').outerHTML = story2;
            
           
          } else {
              alert("Type in 'Story One' or 'Story Two'");
            }
          }
          
         document.getElementsByTagName("body").outerHTML = madlibs();
