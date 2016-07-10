//define bus
var bus = {
    range: 25,
}
var data = {
    "routes": [
        [
        {
            "start_address": "Yerawada",
            "end_address": "Dr. Ambedkar Path",
            "distance": .505,
            "t_b": 3,
            "t_w": 3,
            "t_c": 1,
            "auto":
            {
                "range": 0,
                "price": 6
            }
        }, {
                "start_address": "Dr Ambedkar Path",
                "end_address": "Deccan College Road",
                "distance": 1.5,
                "t_b": 15,
                "t_w": 15,
                "t_c": 4,
                "auto": {
                    "range": 1.5,
                    "price": 5
                }
            }, {
                "start_address": "Deccan College Road",
                "end_address": "Pachwad Chowk",
                "distance": 2.6,
                "t_b": 38,
                "t_c": 5,
                "t_w": 33,
                "auto": {
                    "range": 0,
                    "price": 5
                }

            }, {
                "start_address": "Pachawd Road",
                "end_address": "Abhiyantriki Mahavidyalaya Chowk",
                "distance": 2.9,
                "t_b": 27,
                "t_w": 35,
                "t_c": 6,
                "auto": {
                    "range": 0,
                    "price": 10
                }


            }, {
                "start_address": "Abhiyantriki Mahavidyalaya Chowk",
                "end_address": "Maldhakka Chowk",
                "distance": 2.11,
                "t_b": 30,
                "t_w": 27,
                "t_c": 6,
                "auto": {
                    "range": 2.11,
                    "price": 5
                }


            }, {
                "start_address": "Maldhakka Chowk",
                "end_address": "Prince Aga Khan Road",
                "distance": 2.1,
                "t_b": 13,
                "t_w": 13,
                "t_c": 6,
                "auto": {
                    "range": 5,
                    "price": 6
                }


            }, {
                "start_address": "Prince Aga Khan Road",
                "end_address": "Pune Station",
                "distance": .600,
                "t_b": 3,
                "t_w": 4,
                "t_c": 3,
                "auto": {
                    "range": 5,
                    "price": 6
                }

            }]
        ,
        [{
            "start_address": "Yerwada",
            "end_address": "Deccan college, Pune",
            "distance": 1.2,
            "t_b": 13,
            "t_w": 14,
            "t_c": 3,
            "auto": {
                "range": 4,
                "price": 7
            }


        }, {
                "start_address": "Deccan college, Pune",
                "end_address": "Yerwada Bridge",
                "distance": .9,
                "t_b": 25,
                "t_w": 22,
                "t_c": 2,
                "auto": {
                    "range": 3.8,
                    "price": 6
                }


            }, {
                "start_address": "Yerwada Bridge",
                "end_address": "Bund Garden Road",
                "distance": 2.9,
                "t_b": 13,
                "t_c": 8,
                "t_w": 17,
                "auto": {
                    "range": 2.9,
                    "price": 6
                }


            }, {
                "start_address": "Bund Garden Road",
                "end_address": "Alankar Chowk",
                "distance": 2.200,
                "t_b": 5,
                "t_c": 7,
                "t_w": 6,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }, {
                "start_address": "Alankar Chowk",
                "end_address": "Pune station",
                "distance": 2.0,
                "t_b": 20,
                "t_c": 2,
                "t_w": 60,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }]
        , [{
            "start_address": "Yerwada",
            "end_address": "Abhiyantriki Mahavidhalaya Chowk",
            "distance": 6.00,
            "t_b": 30,
            "t_c": 13,
            "t_w": 27,
            "auto": {
                "range": 0,
                "price": 6
            }

        }, {
                "start_address": "Abhiyantriki Mahavidyalaya Chowk",
                "end_address": "Maldhakka Chowk",
                "distance": 2.11,
                "t_b": 13,
                "t_c": 6,
                "t_w": 13,
                "auto": {
                    "range": 2.11,
                    "price": 6
                }


            }, {
                "start_address": "Maldhakka Chowk",
                "end_address": "Prince Aga Khan Road",
                "distance": 2.1,
                "t_b": 3,
                "t_c": 6,
                "t_w": 4,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }, {
                "start_address": "Prince Aga Khan Road",
                "end_address": "Pune Station",
                "distance": .600,
                "t_b": 11,
                "t_c": 3,
                "t_w": 11,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }]
    ]
}








var data1 = {
    "routes": [
        [
        {
            "start_address": "Yerwada",
            "end_address": "dr ambedkar path",
            "distance": .505,
            "t_b": 3,
            "t_w": 3,
            "t_c": 1,
            "auto":
            {
                "range": 0,
                "price": 6
            }
        }, {
                "start_address": "dr ambedkar path",
                "end_address": "Deccan college road",
                "distance": 1.5,
                "t_b": 15,
                "t_w": 15,
                "t_c": 4,
                "auto": {
                    "range": 1.5,
                    "price": 5
                }
            }, {
                "start_address": "Deccan college road",
                "end_address": "Pachwad chowk",
                "distance": 2.6,
                "t_b": 38,
                "t_c": 5,
                "t_w": 33,
                "auto": {
                    "range": 0,
                    "price": 5
                }

            }, {
                "start_address": "Pachawd Road",
                "end_address": "abhiyantriki mahavidyalaya chowk",
                "distance": 2.9,
                "t_b": 27,
                "t_w": 35,
                "t_c": 6,
                "auto": {
                    "range": 0,
                    "price": 10
                }


            }, {
                "start_address": "abhiyantriki mahavidyalaya chowk",
                "end_address": "maldhakka chowk",
                "distance": 2.11,
                "t_b": 30,
                "t_w": 27,
                "t_c": 6,
                "auto": {
                    "range": 2.11,
                    "price": 5
                }


            }, {
                "start_address": "maldhakka chowk",
                "end_address": "Prince aga khan road",
                "distance": 2.1,
                "t_b": 13,
                "t_w": 13,
                "t_c": 6,
                "auto": {
                    "range": 5,
                    "price": 6
                }


            }, {
                "start_address": "Prince aga khan road",
                "end_address": "Pune station",
                "distance": .600,
                "t_b": 3,
                "t_w": 4,
                "t_c": 3,
                "auto": {
                    "range": 5,
                    "price": 6
                }

            }]
        ,
        [{
            "start_address": "Yerwada",
            "end_address": "Deccan college",
            "distance": 1.2,
            "t_b": 13,
            "t_w": 14,
            "t_c": 3,
            "auto": {
                "range": 4,
                "price": 7
            }


        }, {
                "start_address": "Deccan college",
                "end_address": "Yerwada bridge",
                "distance": .9,
                "t_b": 25,
                "t_w": 22,
                "t_c": 2,
                "auto": {
                    "range": 3.8,
                    "price": 6
                }


            }, {
                "start_address": "Bund GardenRoad",
                "end_address": "Wadia College road",
                "distance": 2.9,
                "t_b": 13,
                "t_c": 8,
                "t_w": 17,
                "auto": {
                    "range": 2.9,
                    "price": 6
                }


            }, {
                "start_address": "Wadia College Road",
                "end_address": "Alankar Chowk",
                "distance": 2.200,
                "t_b": 5,
                "t_c": 7,
                "t_w": 6,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }, {
                "start_address": "Alankar Chowk",
                "end_address": "Pune station",
                "distance": 2.0,
                "t_b": 20,
                "t_c": 2,
                "t_w": 60,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }]
        , [{
            "start_address": "Yerwada",
            "end_address": "abhiyantriki mahavidhalaya chowk",
            "distance": 6.00,
            "t_b": 30,
            "t_c": 13,
            "t_w": 27,
            "auto": {
                "range": 0,
                "price": 6
            }

        }, {
                "start_address": "abhiyantriki mahavidyalaya chowk",
                "end_address": "maldhakka chowk",
                "distance": 2.11,
                "t_b": 13,
                "t_c": 6,
                "t_w": 13,
                "auto": {
                    "range": 2.11,
                    "price": 6
                }


            }, {
                "start_address": "maldhakka chowk",
                "end_address": "Prince aga khan road",
                "distance": 2.1,
                "t_b": 3,
                "t_c": 6,
                "t_w": 4,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }, {
                "start_address": "Prince aga khan road",
                "end_address": "Pune station",
                "distance": .600,
                "t_b": 11,
                "t_c": 3,
                "t_w": 11,
                "auto": {
                    "range": 0,
                    "price": 6
                }


            }]
    ]
}





var autoprice=function(a)
{
    if (a<=1.5) {
        return 17;
    }
    else if (a > 1.5 && a <= 2) {
        return 22.8;
    }
    else if (a > 2 && a <= 2.5) {
        return 28.7;
    }
    else if (a > 2.5 && a <= 3) {
        return 34.5;
    }
    else if (a > 3 && a <= 3.5) {
        return 40.3;
    }
    else if (a > 3.5 && a <= 4) {
        return 46.1;
    }
    else if (a > 4 && a <= 4.5) {
        return 52.0;
    }
    else if(a > 4.5 && a<=5)
    {
        return 57.8 
    }
    return 63.6;
}
var busprice = function (a) {
    
    if (a = 2) {
        return 5;
    }
    else if (a > 2 && a <= 6) {
        return 10;
    }
    else if (a > 6 && a <= 10) {
        return 15;
    }
    else if (a > 10 && a <= 14) {
        return 20;
    }
    else if (a > 14 && a <= 20) {
        return 25;
    }
    else if (a > 20 && a <= 26) {
        return 30;
    }
    else if (a > 26 && a <= 32) {
        return 35;
    }
        
    return 40;
    
}
function optimized_path(data)
{
        var cost=[];
        var time=[];
        var route=[];
    //b_cost[0]=busprice(data.routes[0][0].distance);
    // // for(var i=1;i<data.routes[0].length;i++)
    // // {
    // //   b_cost[i]=b_cost[i-1]+busprice(data.routes[0][i].distance);
    // }
    for(var j=0;j<data.routes.length;j++)   
    {   
        var i=0,count_walk=0;
        var bestroute=[],t_cost=0,t_time=0;
        while(i<data.routes[j].length)
        {
            if(data.routes[j][i].distance<1&&count_walk<=2)
            {
                t_time+=data.routes[j][i].t_w;
                bestroute[i++]="walking";
                count_walk++;
            }
            else if(data.routes[j][i].auto.range>0)
            {
                var dist_so_far=0;
                var auto_range=data.routes[j][i].auto.range;
                t_cost+=autoprice(data.routes[j][i].auto.range);
                t_time+=data.routes[j][i].t_c;
                bestroute[i++]="auto";
                while(dist_so_far+data.routes[j][i].distance<=auto_range)
                {
                    dist_so_far=dist_so_far+data.routes[j][i].distance;
                    t_cost+=autoprice(data.routes[j][i].auto.range);
                    t_time+=data.routes[j][i].t_c;
                    bestroute[i++]="auto";
                }
            }
            else
            {
                t_cost+=busprice(data.routes[j][i].distance);
                t_time+=data.routes[j][i].t_b;
                bestroute[i++]="bus";
            }
        }
        route[j]=bestroute;
        cost[j]=t_cost;
        time[j]=t_time;    
        //console.dir(bestroute);
    }

        var useful={
            "data":data,
            "route":route,
            "time":time,
            "cost":cost,
            "count_walk":2
        }
        // console.dir(route);
        // console.log(" ");
        // console.dir(cost);
        // console.log(" ");
        // console.dir(time);
        return useful;
}
var useful=optimized_path(data);
var useful1=optimized_path(data1);
//console.dir(useful);
module.exports.useful=useful;
module.exports.useful1=useful1;