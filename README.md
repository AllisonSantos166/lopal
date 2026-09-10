# Lição do Lucas

# Desafio 6

## O que é SSH?

SSH (Secure Shell) é um protocolo criptográfico que estabelece uma conexão remota segura entre um cliente e um servidor. No desenvolvimento de software, ele é utilizado para administrar servidores remotos via terminal, executar tarefas automatizadas e realizar operações no Git (como push e pull) com autenticação contínua e criptografada.

### **Diferenças entre HTTPS e SSH no Git**
| Características | HTTPS | SSH |
| ------------- |-------------|:-------:|
|Autenticação      | Personal Access Token (PAT) ou gerenciador de credenciais    |Par de chaves criptográficas (Pública e Privada)|
| Configuração inicial   | Nenhuma para repositórios públicos; login via token para privados    |Criação de chave local e cadastro da chave pública na plataforma |
| Facilidade de uso diário     | Pode solicitar token periodicamente se não houver gerenciador    | Autenticação transparente e automática a cada operação|
| Rede e Firewall |Utiliza a porta 443 (raramente bloqueada em redes restritas) |Utiliza a porta 22 (pode ser bloqueada em redes corporativas) |

### **Casos de uso recomendados**
**HTTPS**: Mais indicado para acessos pontuais, download de código público, máquinas temporárias (ex: ambientes de CI/CD descartáveis) ou redes corporativas com bloqueio da porta 22.

**SSH**: Mais indicado para a máquina principal de trabalho do desenvolvedor e ambientes de automação fixa, pois elimina a necessidade de digitar senhas ou gerenciar tokens após a configuração inicial.

## Passo a Passo Prático: Configuração e Clonagem via SSH

### 1. Gerar a chave SSH
Abra o terminal e execute o comando abaixo (substituindo pelo seu e-mail cadastrado no GitHub):

ssh-keygen -t ed25519 -C "seu_email@exemplo.com"

### 2. Copiar a chave pública gerada
Exiba e copie o conteúdo da chave pública gerada:

cat ~/.ssh/id_ed25519.pub

### 3. Adicionar a chave pública ao GitHub

Acesse o GitHub e navegue até Settings > SSH and GPG keys.

Clique em New SSH key.

Preencha o Title com o nome do seu computador e cole o texto copiado no campo Key.

Clique em Add SSH key.

### 4. Clonar o repositório via SSH
No repositório do GitHub, clique no botão Code, escolha a aba SSH e copie a URL (no formato git@github.com:usuario/repositorio.git). No terminal, rode:

git clone git@github.com:usuario/repositorio.git

#### A clonagem por HTTPS
(git clone [https://github.com/usuario/repositorio.git](https://github.com/usuario/repositorio.git)) funciona imediatamente sem pré-configuração, mas exige a validação de um token no primeiro envio de código. Com SSH, há a etapa prévia de vincular as chaves, mas as interações subsequentes ocorrem de forma transparente, pois o servidor GitHub valida automaticamente a sua chave privada local com a chave pública cadastrada.