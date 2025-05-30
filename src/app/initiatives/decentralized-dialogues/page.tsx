import { genPageMetadata } from "@/app/seo";
import Wrapper from "@/app/components/wrapper";
import React from "react";
import CustomButton from "@/app/components/custom-button";
import Link from "next/link";

export const metadata = genPageMetadata({
  title: "Decentralized Dialogues",
  description: `Join this intimate seminar series, designed for Bitcoin developers ready to think critically about the ethical and societal implications of their work.`,
  url: "https://waye.dev/initiatives/decentralized-dialogues",
});

const page = () => {
  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[128px] pb-[130px]'>
      <Wrapper>
        <div className='max-w-[1030px] mx-auto rounded-[20px] border-2 border-black p-4 md:p-5 lg:p-10 bg-blue-custom-700'>
          <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
            <h1 className='text-[42px] md:text-[52px]'>Decentralized Dialogues</h1>
            <p className='text-[22px] md:text-2xl'>Challenge perspectives, build better.</p>
          </section>

          <section className='flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-6 md:p-5 mb-[60px]'>
            <div className='flex flex-col gap-4 text-lg max-w-[540px]'>
              <section>
                <p className='font-semibold underline underline-offset-4'>12 Virtual Sessions:</p>
                <p> April 2025 – March 2026. Wednesdays @ 5-630PM GMT.
                </p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>Seats.</p>
                <p>10 total.</p>
              </section>

              <section>
                <p className='font-semibold underline underline-offset-4'>Tl;DR:</p>
                <p>Cryptography, political philosophy and legal theory. Selected readings from seminal texts. Seminars where we apply key concepts to Bitcoin’s implications on power, privacy and freedom.
                <br />
                <br />
                First session on <span className='font-semibold'>April 30th.</span>
                </p>
              </section>

            </div>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>General:</p>
            </section>
            <section className='flex flex-col gap-[27px]'>
              <p className='text-lg leading-[160%]'>
              This is a year-long seminar series to discuss the legal, political, and ethical forces shaping Bitcoin. Open to people contributing to freedom technology.
              </p>
              <p className='text-lg leading-[160%]'>
              We dissect essential readings—from ancient philosophy to cypherpunk manifestos—and show up monthly to debate how these big ideas interact with the freedom tech you’re building. Think gloves-off salon to engage in these big ideas.
              </p>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>What to expect:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                  <span className='font-semibold'>12 virtual group sessions.</span> (10 participants max) with a truly great group of people.
                </li>
                <li>
                  <span className='font-semibold'>Pre-session readings.</span> like <em>Plato’s Republic, Hobbes’ Leviathan, Crypto Anarchist Manifesto, Security Without Identification.</em>
                </li>
                <li>
                  <span className='font-semibold'>No lectures. No spectators. Participation encouraged.
                  </span> 
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>Why participate?</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                Because Bitcoin is reshaping how power and governance work—but what does that mean?
                </li>
                <li>
                Because building without context or reflection isn’t enough.
                </li>
                <li>
                Because your work influences systems and people.
                </li>
                <li>
                Because if you don't bring intentionality, who will?
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>What you bring:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>
                  <span className='font-semibold'>Curiosity.</span> Show up ready to question and engage.
                </li>
                <li>
                  <span className='font-semibold'>Commitment.</span> Read texts ahead of time. Show up to sessions.
                </li>
                <li>
                  <span className='font-semibold'>Perspective.</span> Your input is part of the learning.
                </li>
              </ul>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'>Meet the crew:</p>
            </section>
            <section className='text-lg leading-[28.8px]'>
              <p className='text-xl leading-[160%] font-medium pb-[10px]'>Lead facilitator: Jesse Posner</p>
              <p className='text-lg leading-[160%]'>
                Jesse Posner went from arguing cases in court to arguing with cryptographic proofs—because who needs a judge when you’ve got math on
                your side? A philosophy-trained mergers-and-acquisitions lawyer once deep in high-stakes banking litigation, he ditched the suits for
                software and never looked back.
                <br />
                <br />
                Jesse earned a B.A. in Liberal Arts from St. John’s College, renowned for its rigorous Great Books curriculum, which fosters deep
                engagement with the foundational works of Western thought. This training in logic and philosophy laid the groundwork for his
                transition into cryptography, where first principles matter more than legal precedent.
                <br />
                <br />
                At Coinbase, he designed key management systems that secured billions, built threshold signature schemes, and even hacked together
                privacy tech just for fun. Now, as a Senior Blockchain Engineer at Block, he’s making self-custody actually usable with Bitkey and
                rewriting the rules of Bitcoin security.
                <br />
                <br />
                From adaptor signatures to FROST, Jesse's work has earned backing from Brink and the Human Rights Foundation. His mission? Making
                decentralized tech unstoppable, turning privacy into a guarantee, and proving that cryptographers have more power than lawyers ever did.
                <br />
                <br />
              </p>
              <p className='text-xl leading-[160%] font-medium pb-[10px]'>Special guest: Troy Cross</p>
              <p className='text-lg leading-[160%]'>
                Troy Cross is a Professor of Philosophy and Humanities at Reed College, Chief Editor at The Nakamoto Project, Senior Fellow at the Bitcoin Policy
                Institute, and generally aggro twitter personality. Has done lots of fancy things in the world of academic philosophy, but would much rather
                talk about the nuanced relationship between US politics and bitcoin. His deep dive into the world of bitcoin mining and the environment has him
                advising more bitcoin companies than you can name.
                <br />
                <br />
                He is skilled at asking questions that make you think. At least, that's what his professional certificate says.
              </p>
            </section>
          </section>

          <section className='pb-[45px]'>
            <section className='flex flex-col border-b-2 border-b-black pb-5 mb-[30px]'>
              <p className='text-2xl'> Key details recap:</p>
            </section>

            <section className='flex flex-col gap-[28px]'>
              <p className='text-lg leading-[160%]'>12 virtual sessions April 2025 – March 2026. Wednesdays @ 5PM GMT.
              </p>
              <p className='font-semibold text-lg leading-[160%]'>
                Apr 30 ✧ May 21 ✧ Jun 25 ✧ Jul 30 ✧ Aug 27 ✧ Sep 24 ✧ Oct 29 ✧ Nov 19 ✧ Dec 17 ✧ Jan 28 ✧ Feb 25 ✧ Mar 25{" "}
              </p>

              <div className='flex flex-col gap-[5px] p-5 md:p-[30px] md:pb-[60px] bg-blue-custom-600 rounded-[10px] w-full'>
                <p className='text-[22px] leading-[160%] font-medium'>Ready to explore bitcoin's transformative potential?</p>
                <p className='text-lg'>
                  First session on <span className='font-semibold'>April 30th.</span> Enrollment closed, but if you're dying to play, email us.
                </p>
              </div>
            </section>
          </section>

          <section className='flex flex-col gap-[9px] pb-[45px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>

            <div className='text-lg leading-[160%]'>
              <p>Let's chat.</p>
              <Link href='mailto:hello@waye.dev' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>hello@waye.dev</span>
                <span className='text-blue-custom-100'>→</span>
              </Link>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
