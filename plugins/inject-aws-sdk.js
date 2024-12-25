import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export default defineNuxtPlugin(() => {
  const s3 = new S3Client({
      endpoint: 'https://storage.clo.ru/',
      region: 'us-east-1',
      credentials: {
        accessKeyId: '3815UPJNP3WD02UD7BR9',
        secretAccessKey: 'HOP8JyvDBhR6XQePPmD3DvscsKR890ND7W9eDmdy',
      },
  });
    
    const uploadFile = async (file) => { 
      const bucket = 's3-user-e5a009-default-bucket'
      
      const uniqueKey = `${Date.now()}-${file.name}`;
      
      const command = new PutObjectCommand({
        Bucket: bucket,
        Body: file,
        Key: uniqueKey,
        ACL: 'public-read'
      })
      
      const result = await s3.send(command)
      if (result) {
        return `https://${bucket}.storage.clo.ru/${uniqueKey}`
      }
      return result
    }

  return {
    provide: {
      s3,
      uploadFile
    },
  };
});
