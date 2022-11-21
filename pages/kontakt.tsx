import Head from "next/head";
import React from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

import Layout from "../components/Layout";
import { Loader } from "@mantine/core";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const Kontakt: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = React.useState(false);

  const form = React.useRef<HTMLFormElement | null>(null);

  const onSubmit: SubmitHandler<Inputs> = (_data) => {
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Wiadomość wysłana");
        },
        () => {
          setLoading(false);
          alert(
            "Błąd serwisu. Spróbuj się skontaktować inną metodą. Przepraszamy!"
          );
        }
      );

    setLoading(true);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Kontakt - Inter-Oner</title>
      </Head>

      <Layout header={{ position: "sticky", transparent: false }}>
        <section className="py-6 my-auto">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Skontaktuj się</h1>
              <p className="pt-2 pb-4 text-center">
                Zadzwoń lub napisz maila by umówić się na wizytę w serwisie.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bolesława Prusa 10, 43-300 Bielsko-Biała</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>509 924 149</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>serwis@inter-oner.pl</span>
                </p>
              </div>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            >
              <label className="block">
                <span className="mb-1">Imię i nazwisko</span>
                <input
                  {...register("user_name", { required: true })}
                  type="text"
                  name="user_name"
                  placeholder="Jan Kowalski"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email</span>
                <input
                  {...register("user_email", {
                    required: true,
                  })}
                  type="email"
                  name="user_email"
                  placeholder="jan@kowalski.com"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </label>

              <label className="block">
                <span className="mb-1">Wiadomość</span>
                <textarea
                  {...register("message", {
                    required: true,
                    minLength: 8,
                    maxLength: 1028,
                  })}
                  name="message"
                  rows={3}
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                ></textarea>
              </label>
              <button
                disabled={loading}
                type="submit"
                className="btn text-white"
              >
                {loading ? <Loader /> : "Wyślij"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default Kontakt;
