function counter_fn()
{  
let count = Number(localStorage.getItem('on_load_counter'));
    localStorage.setItem('on_load_counter', count + 1);
    document.querySelector("#visitCounter").innerHTML = localStorage.getItem('on_load_counter');
}
counter_fn();