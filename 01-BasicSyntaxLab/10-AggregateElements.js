
function AggregateElements(input){

    console.log(sum (input));
    console.log(sumon1(input));
    console.log(concat(input));


    function sum (arr){
        let sum = 0;
        for(let lem of arr){
            sum += lem;
        }
        return sum;
    }

    function sumon1(arr){
        let sum = 0;
        for(let lem of arr){
            sum += 1 / lem;
        }
        return sum;
    }

    function concat(arr){
        let res = "";
        for(let elem of arr){
            res += elem.toString();
        }
        return res;
    }

}
AggregateElements([1, 2, 3]);