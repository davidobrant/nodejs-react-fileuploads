import { useForm } from "react-hook-form";
import usePosts from "../../hooks/use-posts";

const NewPostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const { create } = usePosts();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    await create(formData, {
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center"
      >
        <div>
          <input
            type="text"
            id="title"
            placeholder="title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <textarea
            className="whitespace-pre-wrap"
            id="content"
            placeholder="content"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <div>
          <input type="file" id="image" {...register("image")} />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="border border-slate-700 rounded-md px-2 py-.5 cursor-pointer disabled:cursor-not-allowed"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default NewPostForm;
