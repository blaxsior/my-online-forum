import { type BinaryLike, scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const SEP = '@'; // 구분자
const scrypt = promisify<BinaryLike, BinaryLike, number, Buffer>(_scrypt);
/**
 * salt를 통해 암호화 한 비밀번호를 salt와 묶어 반환
 * hash와 salt는 '@' 에 의해 구분. 알파벳/숫자 사용 시 문제 발생.
 */
export async function generatePassword(password: string) {
  const salt = randomBytes(32).toString('hex');
  const hash = await getHashFromPassword(password, salt);
  return `${hash}${SEP}${salt}`;
}
/**
 * 입력한 비밀번호를 검증하는 함수
 * @param stored_password DB에 저장된 패스워드
 * @param input_password 유저가 입력한 패스워드
 * @returns {boolean} 패스워드 일치 여부
 */
export async function validatePassword(
  stored_password: string,
  input_password: string,
) {
  const [stored_hash, salt] = stored_password.split(SEP);
  const input_hash = await getHashFromPassword(input_password, salt);
  return stored_hash === input_hash;
}

async function getHashFromPassword(password: BinaryLike, salt: BinaryLike) {
  return (await scrypt(password, salt, 64)).toString('hex');
}
