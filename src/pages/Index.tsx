import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      name: "Мост через р. Волга",
      category: "мосты",
      progress: 85,
      status: "active",
      stages: [
        { name: "Проектирование", done: true },
        { name: "Согласование", done: true },
        { name: "Строительство", done: false },
        { name: "Приёмка", done: false },
      ],
    },
    {
      id: 2,
      name: "Парк «Центральный»",
      category: "благоустройство",
      progress: 60,
      status: "active",
      stages: [
        { name: "Проектирование", done: true },
        { name: "Согласование", done: true },
        { name: "Строительство", done: false },
        { name: "Приёмка", done: false },
      ],
    },
    {
      id: 3,
      name: "Трасса М-11 участок 12",
      category: "дороги",
      progress: 40,
      status: "planning",
      stages: [
        { name: "Проектирование", done: true },
        { name: "Согласование", done: false },
        { name: "Строительство", done: false },
        { name: "Приёмка", done: false },
      ],
    },
    {
      id: 4,
      name: "Пешеходный мост",
      category: "мосты",
      progress: 100,
      status: "completed",
      stages: [
        { name: "Проектирование", done: true },
        { name: "Согласование", done: true },
        { name: "Строительство", done: true },
        { name: "Приёмка", done: true },
      ],
    },
  ];

  const documents = [
    { id: 1, name: "Чертеж_мост_А-15.pdf", date: "10.11.2025", size: "2.4 МБ" },
    { id: 2, name: "Смета_парк_центральный.xlsx", date: "08.11.2025", size: "1.2 МБ" },
    { id: 3, name: "Техническое_задание_М11.docx", date: "05.11.2025", size: "890 КБ" },
  ];

  const incomingPackages = [
    { id: 1, name: "Пакет №124 - Мост через Волгу", status: "valid", date: "12.11.2025" },
    { id: 2, name: "Пакет №125 - Парк Центральный", status: "error", date: "12.11.2025" },
    { id: 3, name: "Пакет №126 - Трасса М-11", status: "valid", date: "11.11.2025" },
  ];

  const scannedDrawings = [
    { id: 1, name: "Чертеж_А3_001", quality: "отличное", pages: 1, status: "processed" },
    { id: 2, name: "Схема_конструкции_12", quality: "хорошее", pages: 3, status: "processed" },
    { id: 3, name: "План_благоустройства", quality: "среднее", pages: 2, status: "processing" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-500";
      case "planning":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "отличное":
        return "text-green-600";
      case "хорошее":
        return "text-blue-600";
      case "среднее":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="https://cdn.poehali.dev/files/534af780-1b90-4181-baf6-b28bcaf4af7b.jpg" 
                alt="МИП" 
                className="h-12 w-auto"
              />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                ИИ ПАНЕЛЬ проектно-изыскательных работ
              </h1>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-white/90 transition-all">
              <Avatar className="h-10 w-10 border-2 border-blue-500">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">
                  ГИ
                </AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Иван Петров</p>
                <p className="text-xs text-gray-600">Главный инженер</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card className="p-6 backdrop-blur-lg bg-white/60 border-black/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Комплексное проектирование</h2>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-white/90 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{project.name}</h3>
                        <Badge variant="outline" className="text-xs capitalize border-black/20">
                          {project.category}
                        </Badge>
                      </div>
                      <Progress value={project.progress} className="h-2 mt-2" />
                      <span className="text-xs text-gray-600 mt-1 block">{project.progress}% завершено</span>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)} ml-4 mt-1`} />
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {project.stages.map((stage, idx) => (
                      <Badge
                        key={idx}
                        variant={stage.done ? "default" : "outline"}
                        className={`text-xs ${
                          stage.done
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"
                            : "border-black/20 text-gray-600"
                        }`}
                      >
                        {stage.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/60 border-black/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Icon name="Archive" className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Технический архив</h2>
            </div>

            <div className="relative mb-6">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="ИИ-поиск по архиву документов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-2xl border-black/10 bg-white/80 backdrop-blur-sm focus:bg-white/90"
              />
            </div>

            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-white/90 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100">
                      <Icon name="FileText" className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                      <p className="text-xs text-gray-600">
                        {doc.date} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/60 border-black/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Icon name="CheckCircle" className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Приём исполнительных чертежей</h2>
            </div>

            <div className="space-y-3">
              {incomingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-white/90 transition-all group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`p-2 rounded-xl ${
                        pkg.status === "error" ? "bg-red-100" : "bg-green-100"
                      }`}
                    >
                      <Icon
                        name={pkg.status === "error" ? "AlertCircle" : "CheckCircle2"}
                        className={pkg.status === "error" ? "text-red-600" : "text-green-600"}
                        size={20}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{pkg.name}</p>
                      <p className="text-xs text-gray-600">{pkg.date}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={pkg.status === "error" ? "destructive" : "outline"}
                    className="rounded-xl"
                  >
                    {pkg.status === "error" ? "Исправить" : "Принять"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/60 border-black/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Icon name="Scan" className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Сканирование, печать</h2>
            </div>

            <div className="space-y-3">
              {scannedDrawings.map((drawing) => (
                <div
                  key={drawing.id}
                  className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-white/90 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-100">
                        <Icon name="Image" className="text-cyan-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{drawing.name}</p>
                        <p className="text-xs text-gray-600">{drawing.pages} стр.</p>
                      </div>
                    </div>
                    {drawing.status === "processing" && (
                      <Badge variant="outline" className="text-xs border-black/20">
                        Обработка...
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-xs text-gray-600">Качество: </span>
                      <span className={`text-xs font-semibold ${getQualityColor(drawing.quality)}`}>
                        {drawing.quality}
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl text-xs">
                      <Icon name="Download" size={14} className="mr-1" />
                      Скачать
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-4 rounded-2xl h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить новый чертёж
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
