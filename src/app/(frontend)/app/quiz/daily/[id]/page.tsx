import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { metaObject } from '@/config/site.config'
import { getServerSession } from 'next-auth'
import Quiz from '../..'
import postData from '@/utils/fetch/postData'
import Summary from '../../summary/Summary'

export const metadata = {
  ...metaObject('Daily Quiz'),
}

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  const dailyQuiz = await postData('daily-quiz/questions', session.accessToken, { quizId: params.id })

  // const dailyQuiz = {
  //   status: true,
  //   message: 'Quiz Started',
  //   data: {
  //     isPlayed: false,
  //     questions: [
  //       {
  //         _id: '65dec26bee4dc2615eb4c9f0',
  //         question: 'Aeger repellat bonus audio alveus conturbo cupio iure.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'abbas',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg',
  //             _id: '65dec26bee4dc2615eb4c9f1',
  //           },
  //           {
  //             title: 'arma',
  //             image: 'https://avatars.githubusercontent.com/u/54851258',
  //             _id: '65dec26bee4dc2615eb4c9f2',
  //           },
  //           {
  //             title: 'adsidue',
  //             image: 'https://avatars.githubusercontent.com/u/51716437',
  //             _id: '65dec26bee4dc2615eb4c9f3',
  //           },
  //           {
  //             title: 'vociferor',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg',
  //             _id: '65dec26bee4dc2615eb4c9f4',
  //           },
  //         ],
  //         duration: 45,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.573Z',
  //         updatedAt: '2024-02-28T05:19:39.573Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4c9f5',
  //         question: 'Theologus ancilla cursim vivo thalassinus coniuratio.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'tantum',
  //             image: 'https://avatars.githubusercontent.com/u/98652890',
  //             _id: '65dec26bee4dc2615eb4c9f6',
  //           },
  //           {
  //             title: 'careo',
  //             image: 'https://avatars.githubusercontent.com/u/98885505',
  //             _id: '65dec26bee4dc2615eb4c9f7',
  //           },
  //           {
  //             title: 'aurum',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/886.jpg',
  //             _id: '65dec26bee4dc2615eb4c9f8',
  //           },
  //           {
  //             title: 'consequuntur',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/756.jpg',
  //             _id: '65dec26bee4dc2615eb4c9f9',
  //           },
  //         ],
  //         duration: 40,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.574Z',
  //         updatedAt: '2024-02-28T05:19:39.574Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca0e',
  //         question: 'Sortitus illum spargo pariatur.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'adipisci',
  //             image: 'https://avatars.githubusercontent.com/u/11731615',
  //             _id: '65dec26bee4dc2615eb4ca0f',
  //           },
  //           {
  //             title: 'aetas',
  //             image: 'https://avatars.githubusercontent.com/u/66663375',
  //             _id: '65dec26bee4dc2615eb4ca10',
  //           },
  //           {
  //             title: 'asporto',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg',
  //             _id: '65dec26bee4dc2615eb4ca11',
  //           },
  //           {
  //             title: 'deprecator',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/430.jpg',
  //             _id: '65dec26bee4dc2615eb4ca12',
  //           },
  //         ],
  //         duration: 20,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.575Z',
  //         updatedAt: '2024-02-28T05:19:39.575Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca18',
  //         question: 'Curvo solvo distinctio demitto cupio pel uterque appositus.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'tergeo',
  //             image: 'https://avatars.githubusercontent.com/u/25469842',
  //             _id: '65dec26bee4dc2615eb4ca19',
  //           },
  //           {
  //             title: 'vaco',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/884.jpg',
  //             _id: '65dec26bee4dc2615eb4ca1a',
  //           },
  //           {
  //             title: 'vulgaris',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
  //             _id: '65dec26bee4dc2615eb4ca1b',
  //           },
  //           {
  //             title: 'cupiditate',
  //             image: 'https://avatars.githubusercontent.com/u/30293378',
  //             _id: '65dec26bee4dc2615eb4ca1c',
  //           },
  //         ],
  //         duration: 40,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.575Z',
  //         updatedAt: '2024-02-28T05:19:39.575Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca27',
  //         question: 'Aveho adinventitias decimus.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'coepi',
  //             image: 'https://avatars.githubusercontent.com/u/1410688',
  //             _id: '65dec26bee4dc2615eb4ca28',
  //           },
  //           {
  //             title: 'aspicio',
  //             image: 'https://avatars.githubusercontent.com/u/89943067',
  //             _id: '65dec26bee4dc2615eb4ca29',
  //           },
  //           {
  //             title: 'tantillus',
  //             image: 'https://avatars.githubusercontent.com/u/81452039',
  //             _id: '65dec26bee4dc2615eb4ca2a',
  //           },
  //           {
  //             title: 'deporto',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg',
  //             _id: '65dec26bee4dc2615eb4ca2b',
  //           },
  //         ],
  //         duration: 20,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.576Z',
  //         updatedAt: '2024-02-28T05:19:39.576Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca31',
  //         question: 'Solium summopere texo arx eveniet cohibeo colligo despecto quibusdam ulterius.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'autem',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
  //             _id: '65dec26bee4dc2615eb4ca32',
  //           },
  //           {
  //             title: 'saepe',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg',
  //             _id: '65dec26bee4dc2615eb4ca33',
  //           },
  //           {
  //             title: 'deserunt',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/534.jpg',
  //             _id: '65dec26bee4dc2615eb4ca34',
  //           },
  //           {
  //             title: 'ante',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/760.jpg',
  //             _id: '65dec26bee4dc2615eb4ca35',
  //           },
  //         ],
  //         duration: 50,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.577Z',
  //         updatedAt: '2024-02-28T05:19:39.577Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca54',
  //         question: 'Candidus abscido auditor bellicus.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'commodo',
  //             image: 'https://avatars.githubusercontent.com/u/52006398',
  //             _id: '65dec26bee4dc2615eb4ca55',
  //           },
  //           {
  //             title: 'approbo',
  //             image: 'https://avatars.githubusercontent.com/u/53270319',
  //             _id: '65dec26bee4dc2615eb4ca56',
  //           },
  //           {
  //             title: 'coma',
  //             image: 'https://avatars.githubusercontent.com/u/65180752',
  //             _id: '65dec26bee4dc2615eb4ca57',
  //           },
  //           {
  //             title: 'porro',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg',
  //             _id: '65dec26bee4dc2615eb4ca58',
  //           },
  //         ],
  //         duration: 40,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.578Z',
  //         updatedAt: '2024-02-28T05:19:39.578Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca6d',
  //         question: 'Deserunt timor casso conservo.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'accusamus',
  //             image: 'https://avatars.githubusercontent.com/u/54905895',
  //             _id: '65dec26bee4dc2615eb4ca6e',
  //           },
  //           {
  //             title: 'nisi',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/260.jpg',
  //             _id: '65dec26bee4dc2615eb4ca6f',
  //           },
  //           {
  //             title: 'deinde',
  //             image: 'https://avatars.githubusercontent.com/u/12766123',
  //             _id: '65dec26bee4dc2615eb4ca70',
  //           },
  //           {
  //             title: 'vulariter',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg',
  //             _id: '65dec26bee4dc2615eb4ca71',
  //           },
  //         ],
  //         duration: 35,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.579Z',
  //         updatedAt: '2024-02-28T05:19:39.579Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4ca77',
  //         question: 'Despecto animus urbs aequitas distinctio cursus cubo eos ver.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'adnuo',
  //             image: 'https://avatars.githubusercontent.com/u/38313091',
  //             _id: '65dec26bee4dc2615eb4ca78',
  //           },
  //           {
  //             title: 'eaque',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/654.jpg',
  //             _id: '65dec26bee4dc2615eb4ca79',
  //           },
  //           {
  //             title: 'cur',
  //             image: 'https://avatars.githubusercontent.com/u/43829164',
  //             _id: '65dec26bee4dc2615eb4ca7a',
  //           },
  //           {
  //             title: 'cervus',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg',
  //             _id: '65dec26bee4dc2615eb4ca7b',
  //           },
  //         ],
  //         duration: 20,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.579Z',
  //         updatedAt: '2024-02-28T05:19:39.579Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cab3',
  //         question: 'Sunt comedo charisma amissio corrumpo aureus civitas.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'dens',
  //             image: 'https://avatars.githubusercontent.com/u/60433827',
  //             _id: '65dec26bee4dc2615eb4cab4',
  //           },
  //           {
  //             title: 'terra',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg',
  //             _id: '65dec26bee4dc2615eb4cab5',
  //           },
  //           {
  //             title: 'audentia',
  //             image: 'https://avatars.githubusercontent.com/u/9162416',
  //             _id: '65dec26bee4dc2615eb4cab6',
  //           },
  //           {
  //             title: 'deinde',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg',
  //             _id: '65dec26bee4dc2615eb4cab7',
  //           },
  //         ],
  //         duration: 15,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.581Z',
  //         updatedAt: '2024-02-28T05:19:39.581Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cadb',
  //         question: 'Statua curo casso.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'clarus',
  //             image: 'https://avatars.githubusercontent.com/u/90055309',
  //             _id: '65dec26bee4dc2615eb4cadc',
  //           },
  //           {
  //             title: 'inventore',
  //             image: 'https://avatars.githubusercontent.com/u/72981255',
  //             _id: '65dec26bee4dc2615eb4cadd',
  //           },
  //           {
  //             title: 'repellat',
  //             image: 'https://avatars.githubusercontent.com/u/436707',
  //             _id: '65dec26bee4dc2615eb4cade',
  //           },
  //           {
  //             title: 'cura',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg',
  //             _id: '65dec26bee4dc2615eb4cadf',
  //           },
  //         ],
  //         duration: 40,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.583Z',
  //         updatedAt: '2024-02-28T05:19:39.583Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cae0',
  //         question: 'Blandior testimonium debeo volubilis ter ipsa.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'arcesso',
  //             image: 'https://avatars.githubusercontent.com/u/49356708',
  //             _id: '65dec26bee4dc2615eb4cae1',
  //           },
  //           {
  //             title: 'arcesso',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg',
  //             _id: '65dec26bee4dc2615eb4cae2',
  //           },
  //           {
  //             title: 'voluptates',
  //             image: 'https://avatars.githubusercontent.com/u/91048752',
  //             _id: '65dec26bee4dc2615eb4cae3',
  //           },
  //           {
  //             title: 'esse',
  //             image: 'https://avatars.githubusercontent.com/u/41544633',
  //             _id: '65dec26bee4dc2615eb4cae4',
  //           },
  //         ],
  //         duration: 35,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.583Z',
  //         updatedAt: '2024-02-28T05:19:39.583Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cb0d',
  //         question: 'Coruscus clamo acidus agnosco solium.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'adeo',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg',
  //             _id: '65dec26bee4dc2615eb4cb0e',
  //           },
  //           {
  //             title: 'suffoco',
  //             image: 'https://avatars.githubusercontent.com/u/11220429',
  //             _id: '65dec26bee4dc2615eb4cb0f',
  //           },
  //           {
  //             title: 'vindico',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1138.jpg',
  //             _id: '65dec26bee4dc2615eb4cb10',
  //           },
  //           {
  //             title: 'sustineo',
  //             image: 'https://avatars.githubusercontent.com/u/74623125',
  //             _id: '65dec26bee4dc2615eb4cb11',
  //           },
  //         ],
  //         duration: 25,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.584Z',
  //         updatedAt: '2024-02-28T05:19:39.584Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cb30',
  //         question: 'Aptus laborum arguo aperiam earum truculenter.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'aeneus',
  //             image: 'https://avatars.githubusercontent.com/u/48312173',
  //             _id: '65dec26bee4dc2615eb4cb31',
  //           },
  //           {
  //             title: 'centum',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/232.jpg',
  //             _id: '65dec26bee4dc2615eb4cb32',
  //           },
  //           {
  //             title: 'crastinus',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg',
  //             _id: '65dec26bee4dc2615eb4cb33',
  //           },
  //           {
  //             title: 'curso',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/582.jpg',
  //             _id: '65dec26bee4dc2615eb4cb34',
  //           },
  //         ],
  //         duration: 5,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.585Z',
  //         updatedAt: '2024-02-28T05:19:39.585Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cb35',
  //         question: 'Depono sto repellendus corrigo utrum acerbitas vesco.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'vesco',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg',
  //             _id: '65dec26bee4dc2615eb4cb36',
  //           },
  //           {
  //             title: 'molestias',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg',
  //             _id: '65dec26bee4dc2615eb4cb37',
  //           },
  //           {
  //             title: 'deleniti',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg',
  //             _id: '65dec26bee4dc2615eb4cb38',
  //           },
  //           {
  //             title: 'dignissimos',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/478.jpg',
  //             _id: '65dec26bee4dc2615eb4cb39',
  //           },
  //         ],
  //         duration: 60,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.585Z',
  //         updatedAt: '2024-02-28T05:19:39.585Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cb49',
  //         question: 'Una absum demulceo.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'textilis',
  //             image: 'https://avatars.githubusercontent.com/u/20618951',
  //             _id: '65dec26bee4dc2615eb4cb4a',
  //           },
  //           {
  //             title: 'universe',
  //             image: 'https://avatars.githubusercontent.com/u/60344717',
  //             _id: '65dec26bee4dc2615eb4cb4b',
  //           },
  //           {
  //             title: 'depulso',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg',
  //             _id: '65dec26bee4dc2615eb4cb4c',
  //           },
  //           {
  //             title: 'ulterius',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/20.jpg',
  //             _id: '65dec26bee4dc2615eb4cb4d',
  //           },
  //         ],
  //         duration: 50,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.586Z',
  //         updatedAt: '2024-02-28T05:19:39.586Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cb8f',
  //         question: 'Cursim esse volva speciosus derelinquo speculum voco.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'ago',
  //             image: 'https://avatars.githubusercontent.com/u/43504463',
  //             _id: '65dec26bee4dc2615eb4cb90',
  //           },
  //           {
  //             title: 'curso',
  //             image: 'https://avatars.githubusercontent.com/u/14216690',
  //             _id: '65dec26bee4dc2615eb4cb91',
  //           },
  //           {
  //             title: 'consequuntur',
  //             image: 'https://avatars.githubusercontent.com/u/94460393',
  //             _id: '65dec26bee4dc2615eb4cb92',
  //           },
  //           {
  //             title: 'sulum',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg',
  //             _id: '65dec26bee4dc2615eb4cb93',
  //           },
  //         ],
  //         duration: 15,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.589Z',
  //         updatedAt: '2024-02-28T05:19:39.589Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cbbc',
  //         question: 'Voro utpote decens cogo aequus solum apparatus cuius.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'coadunatio',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg',
  //             _id: '65dec26bee4dc2615eb4cbbd',
  //           },
  //           {
  //             title: 'summa',
  //             image: 'https://avatars.githubusercontent.com/u/6340251',
  //             _id: '65dec26bee4dc2615eb4cbbe',
  //           },
  //           {
  //             title: 'tergeo',
  //             image: 'https://avatars.githubusercontent.com/u/3853962',
  //             _id: '65dec26bee4dc2615eb4cbbf',
  //           },
  //           {
  //             title: 'versus',
  //             image: 'https://avatars.githubusercontent.com/u/12564608',
  //             _id: '65dec26bee4dc2615eb4cbc0',
  //           },
  //         ],
  //         duration: 5,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.590Z',
  //         updatedAt: '2024-02-28T05:19:39.590Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cbc1',
  //         question: 'Animus coniecto carbo ubi terminatio cur deludo stips minima barba.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'undique',
  //             image: 'https://avatars.githubusercontent.com/u/18305885',
  //             _id: '65dec26bee4dc2615eb4cbc2',
  //           },
  //           {
  //             title: 'aperiam',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1054.jpg',
  //             _id: '65dec26bee4dc2615eb4cbc3',
  //           },
  //           {
  //             title: 'barba',
  //             image: 'https://avatars.githubusercontent.com/u/29250410',
  //             _id: '65dec26bee4dc2615eb4cbc4',
  //           },
  //           {
  //             title: 'vulnus',
  //             image: 'https://avatars.githubusercontent.com/u/17938202',
  //             _id: '65dec26bee4dc2615eb4cbc5',
  //           },
  //         ],
  //         duration: 30,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.590Z',
  //         updatedAt: '2024-02-28T05:19:39.590Z',
  //       },
  //       {
  //         _id: '65dec26bee4dc2615eb4cbc6',
  //         question: 'Amplitudo curia audacia titulus ademptio certus.',
  //         type: 'multiple',
  //         answer: [0],
  //         options: [
  //           {
  //             title: 'corona',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg',
  //             _id: '65dec26bee4dc2615eb4cbc7',
  //           },
  //           {
  //             title: 'antepono',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg',
  //             _id: '65dec26bee4dc2615eb4cbc8',
  //           },
  //           {
  //             title: 'defluo',
  //             image: 'https://avatars.githubusercontent.com/u/93581473',
  //             _id: '65dec26bee4dc2615eb4cbc9',
  //           },
  //           {
  //             title: 'termes',
  //             image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg',
  //             _id: '65dec26bee4dc2615eb4cbca',
  //           },
  //         ],
  //         duration: 10,
  //         status: true,
  //         createdAt: '2024-02-28T05:19:39.590Z',
  //         updatedAt: '2024-02-28T05:19:39.590Z',
  //       },
  //     ],
  //   },
  // }

  if (dailyQuiz.data.isPlayed) return <Summary />
  else {
    return (
      <main className="bg-[#EBF5FB]">
        <div className="relative m-auto min-h-screen max-w-3xl overflow-hidden bg-[var(--front-bg-color)] px-6 pb-20 pt-6 sm:px-8">
          <Quiz questions={dailyQuiz.data.questions} quizId={params.id} />
        </div>
      </main>
    )
  }
}
