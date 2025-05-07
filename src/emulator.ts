type CashinCallback = (amount: number) => void;
type BankCardCallback = (result: boolean) => void;
type DisplayCallback = (message: string) => void;
type VendCallback = (result: boolean) => void;

interface Emulator {
  StartCashin(cb: CashinCallback): void;
  StopCashin(): void;
  BankCardPurchase(
    amount: number,
    cb: BankCardCallback,
    display_cb: DisplayCallback
  ): void;
  BankCardCancel(): void;
  Vend(product_idx: number, cb: VendCallback): void;
}

const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const emulator: Emulator & {
  cashinActive: boolean;
  cashinCallback: CashinCallback | null;
  handleCashin: (event: KeyboardEvent) => void;
} = {
  cashinActive: false,
  cashinCallback: null,

  StartCashin(cb: CashinCallback) {
    this.cashinActive = true;
    this.cashinCallback = cb;
    console.log(
      "Купюроприёмник активирован. Нажмите клавиши для эмуляции приёма купюр."
    );

    document.addEventListener("keydown", this.handleCashin.bind(this));
  },

  StopCashin() {
    this.cashinActive = false;
    console.log("Купюроприёмник отключён.");
    document.removeEventListener("keydown", this.handleCashin.bind(this));
  },

  handleCashin(event: KeyboardEvent) {
    if (event.code === "KeyC" && this.cashinActive) {
      const amount = 100; // Эмулируем приём купюры на 100
      if (this.cashinCallback) {
        this.cashinCallback(amount);
      }
    }
  },

  BankCardPurchase(
    amount: number,
    cb: BankCardCallback,
    display_cb: DisplayCallback
  ) {
    console.log(`Активируем списание с карты на сумму ${amount}`);
    display_cb("Приложите карту (Пробел)");

    document.addEventListener("keydown", async (event) => {
      if (event.code === "Space") {
        await delay(1000);
        display_cb("Обработка карты...");
        await delay(1500);
        display_cb("Связь с банком...");
        await delay(1500);
        display_cb("Транзакция успешна...");
        cb(true);
      }
    });
  },

  BankCardCancel() {
    console.log("Операция по банковской карте отменена.");
  },

  Vend(product_idx: number, cb: VendCallback) {
    console.log(`Выдача продукта с индексом ${product_idx}`);
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyV") {
        cb(true);
      }
    });
  },
};

export default emulator;
