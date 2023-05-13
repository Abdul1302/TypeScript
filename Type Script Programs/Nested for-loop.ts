//nested for-loop with an array
var first_name=['abdullah','Abdul','usman','bilal','saghir']
var last_name=['zeeshan','rehman','habib','manzoor','muhammad']
var f_name=[]
for(var i=0;i<=first_name.length;i++){
    for(var j=0;j<=last_name.length;j++){
        let x=first_name[i]+' '+last_name[j]
       f_name.push(x)       
    }
}
