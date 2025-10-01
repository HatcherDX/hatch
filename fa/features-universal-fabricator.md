# Universal Fabricator

> **جایی که کد قدیمی شانس دوباره‌ای برای زندگی می‌گیرد.**

## Universal Fabricator چیست؟

Universal Fabricator موتور نوسازی Hatcher است. فرآیندی را که ما **Function Foundry** می‌نامیم اجرا می‌کند—یک خط لوله که منطق تجاری آزموده شده از زبان‌های قدیمی مانند Delphi و COBOL را به **Hatcher Functions** با عملکرد بالا و ایمن تبدیل می‌کند (قدرت‌گرفته از WebAssembly).

این **Hatcher Functions** کامپوننت‌های اصلی هستند که بعداً مونتاژ شده و در امنیت یک **EGG** Hatcher (Enforced Governance Guardrails) اجرا می‌شوند.

## فرآیند کوره

### مرحله ۱: تجزیه و تحلیل

قبل از لمس کد شما، آن را درک می‌کنیم:

```bash
hatcher analyze --source="./legacy/payroll.pas" --language="delphi"

> تجزیه و تحلیل کامل:
> - توابع یافت شده: 247
> - قوانین تجاری شناسایی شده: 89
> - وابستگی‌های خارجی: 12
> - پیچیدگی تخمینی: بالا
> - امکان‌پذیری نوسازی: 94%
```

### مرحله ۲: آماده‌سازی

کد شما برای تبدیل آماده می‌شود:

- **نقشه‌برداری وابستگی**: شناسایی آنچه باید شامل شود
- **استخراج رابط**: درک ورودی‌ها و خروجی‌ها
- **پروفایل‌بندی حافظه**: تخمین نیازمندی‌های منبع
- **ارزیابی خطر**: شناسایی مشکلات بالقوه

### مرحله ۳: کامپایل

تبدیل واقعی به WebAssembly:

```bash
hatcher compile --input="./legacy/payroll.pas" --output="./hatcher/functions/payroll.wasm"

> کامپایل Delphi به WebAssembly...
> ✓ تجزیه کد منبع
> ✓ حل وابستگی‌ها
> ✓ بهینه‌سازی برای WASM
> ✓ تولید bindings
>
> خروجی: payroll.wasm (247KB)
> عملکرد: 0.97x سرعت بومی
> حافظه: نیاز به heap 12MB
```

### مرحله ۴: اعتبارسنجی

هر Hatcher Function کاملاً تست می‌شود:

```typescript
// مجموعه تست خودکار تولید شده
describe('Payroll Hatcher Function Validation', () => {
  test('Matches original output', async () => {
    const original = await runOriginalDelphi(testData)
    const functionName = await runWASMModule(testData)

    expect(functionName.output).toEqual(original.output)
    expect(functionName.performance).toBeWithin(0.1).of(original.performance)
  })
})
```

## پشتیبانی چند زبانه

Universal Fabricator از زبان‌های قدیمی که اکثر ابزارها نادیده می‌گیرند پشتیبانی می‌کند:

- **Delphi/Pascal**: پشتیبانی کامل Object Pascal
- **COBOL**: شامل COBOL-85 و COBOL-2002
- **Visual Basic**: VB6 و VB.NET
- **Fortran**: حفظ محاسبات علمی
- **C/C++**: با سازگاری کامپایلر قدیمی
- **Ada**: پشتیبانی سیستم حیاتی ماموریت

## آینده کد قدیمی

Universal Fabricator نشان‌دهنده یک تغییر اساسی در نحوه تفکر ما درباره کد قدیمی است. به جای دیدن آن به عنوان بدهی فنی که باید حذف شود، ما آن را به عنوان منطق تجاری که باید حفظ و تقویت شود می‌بینیم.

کد Delphi شما از ۱۹۹۵ می‌تواند اپلیکیشن React شما را در ۲۰۲۴ قدرت دهد. تراکنش‌های COBOL شما می‌توانند در توابع serverless اجرا شوند. محاسبات Visual Basic شما می‌توانند در مرورگرهای وب اجرا شوند.

این فقط نوسازی نیست—این رهایی است.

---

_Universal Fabricator: جایی که کد قدیمی شما نمی‌میرد، تکامل می‌یابد._

<PageCTA
  title="قدیمی را به دارایی‌های مدرن تبدیل کنید"
  subtitle="کد دهه‌ها پیش را به WebAssembly کامپایل کنید و آن را در هر کجا اجرا کنید"
  buttonText="مهاجرت خود را شروع کنید"
  buttonLink="/fa/getting-started"
  buttonStyle="secondary"
  footer="از COBOL به ابر. از Delphi به Docker. کد شما، جهانی."
/>
