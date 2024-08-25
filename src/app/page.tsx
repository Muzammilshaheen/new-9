import React from "react";

const page = () => {
  return (
<figure className="md:flex bg-red-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 m text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium text-pink-300">
        “Maria Ghafoor – Science Teacher

Maria Ghafoor is an inspiring and innovative science teacher who is deeply committed to sparking curiosity and enthusiasm for science in her students. With a solid foundation in [specific field of science, e.g., Chemistry, Biology, Earth Sciences], Maria is known for her ability to break down complex concepts into engaging and understandable lessons. She utilizes a variety of teaching methods, including interactive experiments, multimedia resources, and real-life applications, to make science come alive in the classroom.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Maria Ghafoor
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        science Teacher
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default page