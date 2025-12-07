# 🔒 DOCUMENTAÇÃO DE SEGURANÇA & PRIVACIDADE — V1  
*(para o sistema de hábitos, rotinas e IA)*

---

## 1. Objetivo da Segurança  
Garantir que nenhum dado do usuário possa ser acessado, interpretado ou correlacionado por terceiros — nem pelos desenvolvedores — mantendo o sistema flexível, rápido e configurável.

O app trabalha com **três níveis de segurança**, e o **usuário escolhe** qual usar.

---

## 2. Arquitetura de Privacidade

### **2.1. Modo Local (Zero Servidor)**

- Nada vai pra nuvem  
- Nenhum backend é usado  
- IA local (LLama) processa tudo offline  
- Dados ficam no dispositivo  
- Criptografia local opcional  

**Ideal para quem não confia em nuvem.**

**O que é salvo localmente:**  
- Entradas  
- Classificações  
- Preferências  
- Estrutura do sistema  
- Histórico  
- Dados da IA local  

**Riscos:**  
- Perda total se o usuário apagar o app  
- Backup precisa ser manual ou criptografado

---

### **2.2. Modo Seguro com Banco Criptografado**

- O servidor recebe **dados criptografados no cliente**  
- O backend **nunca vê texto legível**  
- A chave é **do usuário**, não da equipe  
- Devs **não conseguem** ler nada  

**Criptografia usada:**  
- **AES-256** para dados  
- **PBKDF2 ou Argon2** para senha  
- Chaves **não ficam no servidor**  
- Hash é usado só pra validar existência do arquivo  

**Benefícios:**  
- Backup automático  
- Sincronização entre dispositivos  
- Zero risco de vazamento “com sentido”

---

### **2.3. Modo Transparente (Blockchain-Like)**

Opcional, feito para:  
- Auditoria  
- Transparência  
- Estudo de padrões anônimos  

**Como funciona:**  
Cada ação gera um bloco contendo:  
- timestamp  
- tipo de elemento  
- hash do conteúdo (nunca o conteúdo)  
- ID aleatório não rastreável  

Esses blocos aparecem num painel público, estilo blockchain.  
Ninguém sabe o conteúdo, só que “algo aconteceu”.

**Finalidade:**  
- Provar que nada é manipulado  
- Garantir que não existe coleta oculta  
- Processo totalmente verificável

---

## 3. Segurança do Tráfego

Toda comunicação usa:  
- **HTTPS/TLS 1.3**  
- **HSTS**  
- CORS restrito  
- Rate-limiting contra abuso  

---

## 4. IA — Segurança e Ética

### **4.1. IA Externa (Gemini, OpenAI etc.)**
Para quem quiser usar.

- Só enviamos o necessário  
- Dois modos:  
  - **Modo Privado**: mínimo contexto  
  - **Modo Profundo**: contexto total  
- Logs nunca guardam prompts  
- Usuário pode apagar o histórico de IA a qualquer momento

---

### **4.2. IA Local (embarcada)**

Rodando LLama ou outro modelo offline:

- Zero envio de dados  
- Zero coleta  
- Zero risco de vazamento  
- 100% dentro do dispositivo  

**O modo mais seguro do sistema.**

---

## 5. Níveis de Identificação do Usuário

### **5.1. ID Aleatório Permanente**  
- Gerado na instalação  
- Não vincula nome/email/CPF  
- Serve pra backups e sincronização  

### **5.2. Login com Email**  
- Conteúdo continua criptografado  
- Email só pra recuperar conta  

### **5.3. 100% Anônimo**  
- Sem email  
- Sem backup  
- Tudo local  

---

## 6. Permissões do App

O app só pede:  
- Armazenamento  
- Notificações (opcional)  
- Internet (somente se IA externa estiver ativa)  

Nenhuma permissão invasiva.

---

## 7. Segurança Contra Vazamentos e Ameaças

Implementações recomendadas:

- Sanitização de input  
- JWT com expiração curta  
- Tokens rotativos  
- Backend robusto (se existir)  
- Firewall de aplicação  
- Alertas de uso anômalo  

Proteção contra:  
- Injeção  
- XSS  
- CSRF  
- Replay attack  

---

## 8. Transparência do Sistema

O usuário sempre pode ver:  
- O que está sendo enviado  
- O que está armazenado  
- Qual IA está processando  
- Histórico de acessos  
- Auditoria completa (modo blockchain-like)

---

## 9. Política do Usuário como Dono Absoluto

O usuário pode, sempre:  
- Baixar todos os dados  
- Apagar tudo  
- Exportar localmente  
- Transferir para outro dispositivo  
- Ver logs  
- Resetar recomendações  
- Trocar a IA quando quiser  

---

## 10. Conclusão

O aplicativo é construído sobre três pilares:

- **Privacidade total**  
- **Controle absoluto do usuário**  
- **Transparência extrema**  

A segurança foi pensada desde o início — não como remendo.  
E tudo é modular para evoluir junto com o sistema.
