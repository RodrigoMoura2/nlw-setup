const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  //const today = '19/01'
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso!😋")
    return
  }
  nlwSetup.addDay(today)
}

//salvando um objeto em "string"
function save() {
  console.log(nlwSetup.data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}


//const data = {
//  run: ["01-01", "01-02", "01-06"],
//  takepills:['01-03'],
//journal:['01-02']
//} automação dessa parte em JSON.Parse para resgatar os dados, recuperação tirando de String para objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
// || = Ou {} sem nada igual objeto vazio
nlwSetup.setData(data)
nlwSetup.load()
