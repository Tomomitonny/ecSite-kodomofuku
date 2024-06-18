import React from 'react';
import { jsPDF } from 'jspdf';

const TermsOfService = () => {
  const terms = `
  ### オンラインショップ利用規約

  第1条（適用）
  本利用規約は、当ショップがこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。

  第2条（利用登録）
  登録希望者が当ショップの定める方法によって利用登録を申請し、当ショップがこれを承認することによって、利用登録が完了するものとします。

  第3条（ユーザーIDおよびパスワードの管理）
  ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。

  第4条（禁止事項）
  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
  1. 法令または公序良俗に違反する行為
  2. 犯罪行為に関連する行為
  3. サーバーまたはネットワークの機能を破壊したり、妨害したりする行為
  4. 本サービスの運営を妨害するおそれのある行為
  5. 他のユーザーに関する個人情報等を収集または蓄積する行為
  6. 他のユーザーに成りすます行為
  7. 当ショップのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
  8. その他、当ショップが不適切と判断する行為

  第5条（本サービスの提供の停止等）
  当ショップは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができます。
  1. 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
  2. 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
  3. コンピュータまたは通信回線等が事故により停止した場合
  4. その他、当ショップが本サービスの提供が困難と判断した場合

  第6条（利用規約の変更）
  当ショップは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができます。
  `;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(terms, 10, 10);
    doc.save('terms_of_service.pdf');
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">利用規約</h2>
      <div className="bg-gray-100 p-6 mx-20 rounded-lg shadow-md">
        <pre className="whitespace-pre-wrap">{terms}</pre>
      </div>
      <div className="text-center mt-6">
        <button 
          onClick={downloadPDF} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          利用規約をダウンロード
        </button>
      </div>
    </div>
  );
};

export default TermsOfService;
