// burada actions/index.js'de export ettiğimiz büyük harfle yazılan değişkenleri import ediyoruz
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, UPDATE_DISPLAY, CLEAR_DISPLAY, CHANGE_OVERWRITE, SAVE_TO_MEMORY, GET_FROM_MEMORY, CLEAR_MEMORY, CLEAR_EVERYTHING, EQUALS, SQUARE_ROOT } from './../actions';

// bu bizim reducer'ı başlatırken kullanacağımız ilk state hali. CE'ye bastığımızda da bunu kullanmak gerekti
export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  // display kısmını ekranda total'i veya girilen rakamları görmek için kullanıyoruz
  display: "0",
  //numberoverwrite ekrandaki rakamları yan yana mı yoksa baştan mı yazacağız ona bakmak için kullanıyoruz
  numberOverwrite: true
}

// bu dört işlem yapan bir fonksiyon. bu fonksyinu reducer'a action type olarak APPLY_NUMBER geldiğinde çağırıyoruz. oraya bakılabilir.
const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    case ("/"):
      return num1 / num2;
    default:
      return;
  }
}

// burası reducer fonksiyonu, state'in hangi action type'ta nasıl güncelleneceği buradaki switch case'lerde belirleniyor
const reducer = (state, action) => {
 
  switch (action.type) {
    case (ADD_ONE):
      return ({
        /// önce state'in mevcut halinin kopyasını alıyoruz
        ...state,
        // sonra state'in total değerini 1 artıyoruz
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      // yeni toplamı üstte yazılmış fonksiyonu verdiğimiz parametrelerle çağırıyoruz
      let new_total = calculateResult(state.total, action.payload, state.operation)
      return ({
        // önce mevcut state'in kopyasını alıyoruz
        ...state,
        // sonra total ve display değerlerini güncelliyoruz.
        total: new_total,
        // display'i de güncellememizin sebebi ben App.js'de kullanıcıya state.display'i göstermeyi tercih ettiğim için
        display: new_total.toString()
      });

    case (CHANGE_OPERATION):
      // bunda sadece state'in bir kopyasını alıp state'deki işlem türünü güncelliyoruz
      return ({
        ...state,
        operation: action.payload
      });
    case (UPDATE_DISPLAY):
      // bunda da ekrana yazılan rakamları tutan state'i güncelleiyoruz. mevcut değerin üzerine payload'dan gelen değeri ekliyoruz
      return ({
        ...state,
        display: (state.display + action.payload)
      });
    case (CLEAR_DISPLAY):
      // bunda ekrandaki display boşaltılıyor, bunu numberOverWrite true olunca göndereceğiz
      return ({
        ...state,
        display: ""
      });
    case (CHANGE_OVERWRITE):
      // state numberOverWrite olarak true false tutuyoruz. bu bize kullacının ekrandaki rakamın üzerine yazıp yazmamasını kontrol etmemizi sağlayacak
      // mevcut değer true ise false, false ise true yapıyoruz
      let newMode = state.numberOverwrite ? false : true
      return ({
        ...state,
        numberOverwrite: newMode
      });
    case (SAVE_TO_MEMORY):
      // state'deki total değerini memory'ye kaydediyoruz
      return ({
        ...state,
        memory: state.total
      });
    case (GET_FROM_MEMORY):
      // state'deki memory değerini alıp total'e yazıyoruz
      return ({
        ...state,
        total: state.memory,
        display: state.memory
      });
    case (CLEAR_MEMORY):
      // state'deki memory değerini sıfırlıyoruz
      return ({
        ...state,
        memory: 0
      });
    case (CLEAR_EVERYTHING):
      // state'i en baştaki haline getiriyoruz
      return (initialState);
    case (EQUALS):
      // eşittir düğmesine basıldığında state'i bu şekilde güncelliyoruz.
      // burada yapılacak işlemi state'deki operatörden çekiyoruz
      let result = calculateResult(state.total, parseInt(state.display), state.operation);
      return ({
        ...state,
        total: result,
        display: result.toString()
      });
    case (SQUARE_ROOT):
    // squareRoot düğmesine basıldığında state'i bu şekilde güncelliyoruz.
      let rootResult = Math.sqrt(state.total)
      return ({
        ...state,
        total: rootResult,
        display: rootResult.toString()
      });

    default:
      return state;
  }
}

export default reducer;