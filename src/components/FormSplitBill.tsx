export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2> Patungan Bareng x</h2>

      <label htmlFor="">💵Total Tagihan</label>
      <input type="text" name="" id="" />
      <label htmlFor="">🙋‍♂️Tagihan Kamu</label>
      <input type="text" name="" id="" />
      <label htmlFor="">🙋Tagihan x</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">🤑 Ditalangin Sama x</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">x</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
