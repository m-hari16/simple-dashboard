function FormInput({titleForm, onSubmit}) {
  return(
    <div className="w-full m-5">
      <h2 className="text-text-100 text-[20px] font-sans font-semibold mb-4">{titleForm}</h2>
      <hr className="mb-6"/>
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            className="mb-1 block text-text-100 text-[13px] font-sans font-semibold"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-[50%] rounded-md border bg-backgroundWhite-200 py-3 px-6 text-base font-sans text-text-100"
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block text-text-100 text-[13px] font-sans font-semibold"
          >
            Content
          </label>
          <textarea
            rows="6"
            name="content"
            id="content"
            className="w-full resize-none rounded-md border bg-backgroundWhite-200 py-3 px-6 text-base font-sans text-text-100"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-md bg-backgroundGreen-300 w-[97px] h-[42px] text-white text-[16px] font-sans font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export  default FormInput