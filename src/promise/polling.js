// Ваша задача — реализовать такое поведение. Конечно, хотелось бы написать код так,
// чтобы логика повторных запросов была отделена от бизнес-логики конкретного сервиса.
// Таким образом нужно написать функцию polling, которая раз в ms миллисекунд будет
// делать запрос с помощью асинхронной функции fetcher (без аргументов),
// пока функция isCompleted не вернет true для очередного ответа.
// После этого нужно вернуть результат последнего вызова.
// Если при каком-то вызове случился reject, нужно подождать ms миллисекунд и попробовать снова.


function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

function polling(fetcher, isCompleted, delay) {
  return fetcher().then((result) => {
    if (isCompleted(result)) {
      return result;
    }
    throw "Is not completed";
  }).catch(() => {
    return sleep(delay).then(() => {
      return polling(fetcher, isCompleted, delay)
    })
  })
}

async function pollingAsync(fetcher, isCompleted, delay) {
  try {
    const funcRes = await fetcher();
    if (isCompleted(funcRes)) {
      return funcRes;
    }
  } catch {}
  await sleep(delay);
  return pollingAsync(fetcher, isCompleted, delay);
}

async function pollingAsyncWithoutRecursion(fetcher, isCompleted, delay) {
  while (true) {
    try {
      let funcRes = await fetcher();
      if (isCompleted(funcRes)) {
        return funcRes;
      }
    } catch {}
    await sleep(delay);
  }
}


  // return new Promise((resolve, reject) => {
  //   let result = fetcher();
  //   result.then((result) => {
  //     const data = isCompleted(result);
  //     if (!data) {
  //       polling(fetcher, isCompleted, delay).then((res) => {
  //         resolve(res);
  //       })
  //     } else {
  //       resolve(result);
  //     }
  //   });
  // })
// }


const testingResponse = { status: "testing" };
const timeLimitResponse = { status: "timeLimit" };
let i = 0;

const fakeFetcher = async () => {
  console.log("fakeFetcher");
  if (i === 1) {
    i++;
    throw new Error(1);
  } else {
    return i++ < 3 ? testingResponse : timeLimitResponse;
  }

}

const result = pollingAsync(
  fakeFetcher,
  (response) => response.status !== "testing",
  1000,
);

result.then(data => console.log(data));
// через 1.5 секунды получим объект со статусом "timeLimit"


// ДЗ
// async await с рекурсией
// async await без рекурсии
