var arr=[
    {
      "title": "Work",
      "timeframes": {
        "daily": {"current": 5,"previous": 7},
        "weekly": {"current": 32,"previous": 36},
        "monthly": {"current": 103,"previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
function time()
{
    var a
    const nodeList= document.querySelectorAll("#time");
    const nodeList2= document.querySelectorAll("#pretime");    
    a=document.getElementsByClassName("time");
    for(var i=0;i<a.length;i++)
    { 
      nodeList[i].innerHTML=arr[i]["timeframes"]["daily"]["current"]+"hrs";
      nodeList2[i].innerHTML="previous - "+arr[i]["timeframes"]["daily"]["previous"]+"hrs";
    }

}
function time2()
{
    var a
    const nodeList= document.querySelectorAll("#time");
    const nodeList2= document.querySelectorAll("#pretime"); 
    a=document.getElementsByClassName("time");
    for(var i=0;i<a.length;i++)
    { 
      nodeList[i].innerHTML=arr[i]["timeframes"]["weekly"]["current"]+"hrs";
      nodeList2[i].innerHTML="previous - "+arr[i]["timeframes"]["weekly"]["previous"]+"hrs";
    }

}
function time3()
{
    var a
    const nodeList= document.querySelectorAll("#time");
    const nodeList2= document.querySelectorAll("#pretime"); 
    a=document.getElementsByClassName("time");
    for(var i=0;i<a.length;i++)
    { 
      nodeList[i].innerHTML=arr[i]["timeframes"]["monthly"]["current"]+"hrs";
      nodeList2[i].innerHTML="previous - "+arr[i]["timeframes"]["monthly"]["previous"]+"hrs";
    }
}