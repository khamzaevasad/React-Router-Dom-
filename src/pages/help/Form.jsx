function Form() {
  return (
    <>
      <h1>Send Us Questions</h1>
      <hr />
      <div className="form-container">
        <form>
          <label className="form-control">
            <span>Your Email</span>
            <input type="email" />
          </label>
          <label className="form-control">
            <span>Your Email</span>
            <textarea></textarea>
          </label>
          <button className="button">Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;
