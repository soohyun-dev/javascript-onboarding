/*
*요구사항
닉네임 중 같은 글자가 연속적으로 포함 될 경우 두 계정 모두 사용 제한.

사용제한이 걸린 계정의 이메일을 문자열 오름차순 정렬하여 return
이때, 중복은 제거하라.

*해결전략
dict 를 사용하자. 
닉네임을 정렬하여 dict에 키값으로 저장하고 카운트 1씩해줌.
이때, 같은 글자가 연속적으로 포함된다면 같은 키값을 가질 것이고, 카운트는 1이 넘어가게됨.

이 값들을 찾아내어. 해당 키값을 가지고 있는 계정들의 이메일을 따로 저장.
문자열 정렬하여 출력.

*기능목록
1. 입력된 닉네임을 키값에 넣어주는 함수 => enterDict
2. 키값의 value 값이 2개 이상인 값들을 return 해주는 함수 => checkValue
3. 사용제한될 이메일을 return 해주는 함수 => refuseEmail
*/

function problem6(forms) {
  let nickNameCnt = {};
  function enterDict(accountInfo) {
    accountInfo.map((account) => {
      let nickName = account[1].split("");
      nickName.sort();
      let key = nickName.join("");
      if (nickNameCnt[key]) nickNameCnt[key] += 1;
      else nickNameCnt[key] = 1;
    });
    return;
  }
}

module.exports = problem6;
