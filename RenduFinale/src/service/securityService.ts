// import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
// export class securityService {
//     async checkAuth(metadata: Metadata) {
//         const token = await this.sendToGestion.getToken(metadata);
//         const payload: any = await this.jwtService.decode(token);
//         if (this.checkUser(payload.sub)) {
//             return false;
//         }
//         return true;
//     }


//     private async generateToken(sendMetadata: ) {
//         const token = jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.name }, SECRET_KEY, {
//             expiresIn: '2 days',
//           });
//         metadata.add('authorization', 'Bearer ' + await this.jwtService.signAsync(payload))
//         return metadata
//     }

//     async checkUser(id: string): Promise<Boolean> {
//         const check = await this.authModel.findById(id);
//         if (!check) {
//             return false;
//         }
//         return true;
//     }

//     getToken(request: Request): string {
//         const token = request.headers.get('Authorization')?.replace('Bearer ', '');;
//         if (!token) {
//             throw 'Token manquant !';
//         }
//         return token;
//     }
// }